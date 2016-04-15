#include "routines.h"

void daxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
  cl_int error;
  cl_event event;
  cl_platform_id platform;
  cl_device_id device;

  SAFE(clGetPlatformIDs(1, &platform, NULL));
  SAFE(clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL));

  cl_context_properties props[3] = {
    (cl_context_properties) CL_CONTEXT_PLATFORM,
    (cl_context_properties) platform,
    0
  };
  cl_context ctx = clCreateContext(props, 1, &device, NULL, NULL, &error);
  cl_command_queue queue = clCreateCommandQueue(ctx, device, 0, &error);

  int n = info[0]->Uint32Value();
  cl_double alpha = info[1]->NumberValue();
  void *x_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  int inc_x = info[3]->Uint32Value();
  void *y_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  int inc_y = info[5]->Uint32Value();

  SAFE(clblasSetup());
  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_double), NULL, &error),
          y = clCreateBuffer(ctx, CL_MEM_READ_WRITE, n * sizeof(cl_double), NULL, &error);

  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, n * sizeof(cl_double), x_data, 0, NULL, NULL));
  SAFE(clEnqueueWriteBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_double), y_data, 0, NULL, NULL));
  SAFE(clblasDaxpy(n, alpha, x, 0, inc_x, y, 0, inc_y, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));
  SAFE(clEnqueueReadBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_double), y_data, 0, NULL, NULL));

  clReleaseEvent(event);
  clReleaseMemObject(x);
  clReleaseMemObject(y);
  clblasTeardown();

  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
}

void saxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
  cl_int error;
  cl_event event;
  cl_platform_id platform;
  cl_device_id device;

  SAFE(clGetPlatformIDs(1, &platform, NULL));
  SAFE(clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL));

  cl_context_properties props[3] = {
    (cl_context_properties) CL_CONTEXT_PLATFORM,
    (cl_context_properties) platform,
    0
  };
  cl_context ctx = clCreateContext(props, 1, &device, NULL, NULL, &error);
  cl_command_queue queue = clCreateCommandQueue(ctx, device, 0, &error);

  int n = info[0]->Uint32Value();
  cl_float alpha = info[1]->NumberValue();
  void *x_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
  int inc_x = info[3]->Uint32Value();
  void *y_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
  int inc_y = info[5]->Uint32Value();

  SAFE(clblasSetup());
  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_float), NULL, &error),
          y = clCreateBuffer(ctx, CL_MEM_READ_WRITE, n * sizeof(cl_float), NULL, &error);

  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, n * sizeof(cl_float), x_data, 0, NULL, NULL));
  SAFE(clEnqueueWriteBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_float), y_data, 0, NULL, NULL));
  SAFE(clblasSaxpy(n, alpha, x, 0, inc_x, y, 0, inc_y, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));
  SAFE(clEnqueueReadBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_float), y_data, 0, NULL, NULL));

  clReleaseEvent(event);
  clReleaseMemObject(x);
  clReleaseMemObject(y);
  clblasTeardown();
  
  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
}
