
#include "routines.h"

void dtbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int lda = info[6]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int inc_x = info[8]->Uint32Value();
	cblas_dtbmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}

void stbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int lda = info[6]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int inc_x = info[8]->Uint32Value();
	cblas_stbmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}

void ztbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int lda = info[6]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int inc_x = info[8]->Uint32Value();
	cblas_ztbmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}

void ctbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int lda = info[6]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int inc_x = info[8]->Uint32Value();
	cblas_ctbmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}
