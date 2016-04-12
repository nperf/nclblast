#include <node.h>
#include "routines.h"

void Init(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "dasum", dasum);
  NODE_SET_METHOD(exports, "sasum", sasum);
  NODE_SET_METHOD(exports, "daxpy", daxpy);
  NODE_SET_METHOD(exports, "saxpy", saxpy);
  NODE_SET_METHOD(exports, "dcopy", dcopy);
  NODE_SET_METHOD(exports, "scopy", scopy);
  NODE_SET_METHOD(exports, "ddot", ddot);
  NODE_SET_METHOD(exports, "sdot", sdot);
  NODE_SET_METHOD(exports, "idamax", idamax);
  NODE_SET_METHOD(exports, "isamax", isamax);
}

NODE_MODULE(addon, Init)
