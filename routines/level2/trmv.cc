
#include "routines.h"

void dtrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_dtrmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void strmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_strmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ztrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_ztrmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ctrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_ctrmv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}
