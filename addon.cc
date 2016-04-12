#include <node.h>
#include "routines.h"

void Init(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "sasum", sasum);
  NODE_SET_METHOD(exports, "dasum", dasum);
}

NODE_MODULE(addon, Init)
