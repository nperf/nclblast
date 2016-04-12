#include "routines.h"

void dasum(const v8::FunctionCallbackInfo<v8::Value>& info) {
  cl_int                error;
  cl_event              event;
  cl_platform_id        platform;
  cl_device_id          device;
  cl_context_properties props[3] = { 0, 0, 0 };

  SAFE(clGetPlatformIDs(1, &platform, NULL));
  SAFE(clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL));

  props[0] = (cl_context_properties) CL_CONTEXT_PLATFORM;
  props[1] = (cl_context_properties) platform;

  cl_context ctx = clCreateContext(props, 1, &device, NULL, NULL, &error);
  cl_command_queue queue = clCreateCommandQueue(ctx, device, 0, &error);

  size_t  n = info[0]->Uint32Value(),
          length = n * sizeof(cl_double*),
          byte = sizeof(cl_double);

  void *x_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();

  cl_double result;
  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, length, NULL, &error),
          asum = clCreateBuffer(ctx, CL_MEM_WRITE_ONLY, byte, NULL, &error),
          scratch = clCreateBuffer(ctx, CL_MEM_READ_WRITE, length, NULL, &error);

  SAFE(clblasSetup());
  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, length, x_data, 0, NULL, NULL));
  SAFE(clblasDasum(n, asum, 0, x, 0, 1, scratch, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));
  SAFE(clEnqueueReadBuffer(queue, asum, CL_TRUE, 0, byte, &result, 0, NULL, NULL));

  clReleaseMemObject(x);
  clReleaseMemObject(asum);
  clReleaseMemObject(scratch);
  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
  clblasTeardown();

  info.GetReturnValue().Set(v8::Number::New(info.GetIsolate(), result));
}

void sasum(const v8::FunctionCallbackInfo<v8::Value>& info) {
  cl_int                error;
  cl_event              event;
  cl_platform_id        platform;
  cl_device_id          device;
  cl_context_properties props[3] = { 0, 0, 0 };

  SAFE(clGetPlatformIDs(1, &platform, NULL));
  SAFE(clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL));

  props[0] = (cl_context_properties) CL_CONTEXT_PLATFORM;
  props[1] = (cl_context_properties) platform;

  cl_context ctx = clCreateContext(props, 1, &device, NULL, NULL, &error);
  cl_command_queue queue = clCreateCommandQueue(ctx, device, 0, &error);

  size_t  n = info[0]->Uint32Value(),
          length = n * sizeof(cl_float*),
          byte = sizeof(cl_float);

  void *x_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();

  cl_float result;
  cl_mem  x = clCreateBuffer(ctx, CL_MEM_READ_ONLY, length, NULL, &error),
          asum = clCreateBuffer(ctx, CL_MEM_WRITE_ONLY, byte, NULL, &error),
          scratch = clCreateBuffer(ctx, CL_MEM_READ_WRITE, length, NULL, &error);

  SAFE(clblasSetup());
  SAFE(clEnqueueWriteBuffer(queue, x, CL_TRUE, 0, length, x_data, 0, NULL, NULL));
  SAFE(clblasSasum(n, asum, 0, x, 0, 1, scratch, 1, &queue, 0, NULL, &event));
  SAFE(clWaitForEvents(1, &event));
  SAFE(clEnqueueReadBuffer(queue, asum, CL_TRUE, 0, byte, &result, 0, NULL, NULL));

  clReleaseMemObject(x);
  clReleaseMemObject(asum);
  clReleaseMemObject(scratch);
  clReleaseCommandQueue(queue);
  clReleaseContext(ctx);
  clblasTeardown();

  info.GetReturnValue().Set(v8::Number::New(info.GetIsolate(), result));
}
