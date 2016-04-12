#include "routines.h"

void ddot(const v8::FunctionCallbackInfo<v8::Value>& info) {
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
  void *x_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  int inc_x = info[2]->Uint32Value();
  void *y_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  int inc_y = info[4]->Uint32Value();

  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_double*), NULL, &error),
          y = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_double*), NULL, &error),
          container = clCreateBuffer(ctx, CL_MEM_WRITE_ONLY, sizeof(cl_double), NULL, &error),
          scratch = clCreateBuffer(ctx, CL_MEM_READ_WRITE, n * sizeof(cl_double*), NULL, &error);

  SAFE(clblasSetup());
  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, n * sizeof(cl_double*), x_data, 0, NULL, NULL));
  SAFE(clEnqueueWriteBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_double*), y_data, 0, NULL, NULL));
  SAFE(clblasDdot(n, container, 0, x, 0, inc_x, y, 0, inc_y, scratch, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));

  cl_double result;
  SAFE(clEnqueueReadBuffer(queue, container, CL_TRUE, 0, sizeof(cl_double), &result, 0, NULL, NULL));

  clReleaseEvent(event);
  clReleaseMemObject(x);
  clReleaseMemObject(y);
  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
  clblasTeardown();

  info.GetReturnValue().Set(v8::Number::New(info.GetIsolate(), result));
}

void sdot(const v8::FunctionCallbackInfo<v8::Value>& info) {
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
  void *x_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
  int inc_x = info[2]->Uint32Value();
  void *y_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
  int inc_y = info[4]->Uint32Value();

  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_float*), NULL, &error),
          y = clCreateBuffer(ctx, CL_MEM_READ_ONLY, n * sizeof(cl_float*), NULL, &error),
          container = clCreateBuffer(ctx, CL_MEM_WRITE_ONLY, sizeof(cl_float), NULL, &error),
          scratch = clCreateBuffer(ctx, CL_MEM_READ_WRITE, n * sizeof(cl_float*), NULL, &error);

  SAFE(clblasSetup());
  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, n * sizeof(cl_float*), x_data, 0, NULL, NULL));
  SAFE(clEnqueueWriteBuffer(queue, y, CL_TRUE, 0, n * sizeof(cl_float*), y_data, 0, NULL, NULL));
  SAFE(clblasSdot(n, container, 0, x, 0, inc_x, y, 0, inc_y, scratch, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));

  cl_float result;
  SAFE(clEnqueueReadBuffer(queue, container, CL_TRUE, 0, sizeof(cl_float), &result, 0, NULL, NULL));

  clReleaseEvent(event);
  clReleaseMemObject(x);
  clReleaseMemObject(y);
  clReleaseMemObject(container);
  clReleaseMemObject(scratch);
  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
  clblasTeardown();

  info.GetReturnValue().Set(v8::Number::New(info.GetIsolate(), result));
}
