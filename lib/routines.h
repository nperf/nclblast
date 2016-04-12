#ifndef ROUTINES_H
#define ROUTINES_H

#include <node.h>
#include <clBLAS.h>

#define SAFE(call) \
do { \
  cl_int error = call; \
  if (error != CL_SUCCESS) { \
    fprintf(stderr, "CL error in file '%s' on line '%d'", __FILE__, __LINE__); \
    exit(1); \
  } \
} while (0)

void dasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void sasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void daxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void saxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void dcopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void scopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void ddot(const v8::FunctionCallbackInfo<v8::Value>& info);
void sdot(const v8::FunctionCallbackInfo<v8::Value>& info);
void idamax(const v8::FunctionCallbackInfo<v8::Value>& info);
void isamax(const v8::FunctionCallbackInfo<v8::Value>& info);
void dnrm2(const v8::FunctionCallbackInfo<v8::Value>& info);
void snrm2(const v8::FunctionCallbackInfo<v8::Value>& info);

#endif
