
#include "routines.h"

void dtrsv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_dtrsv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void strsv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_strsv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ztrsv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_ztrsv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ctrsv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const CLBlastTriangle uplo = static_cast<CLBlastTriangle>(info[0]->Uint32Value());
	const CLBlastTranspose trans = static_cast<CLBlastTranspose>(info[1]->Uint32Value());
	const CLBlastDiagonal diag = static_cast<CLBlastDiagonal>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7]->Uint32Value();
	cblas_ctrsv(CLBlastLayoutRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}
