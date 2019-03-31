import {
  FloatArray,
  INCLBlast,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
} from './types';
import { prefix } from './util';

let nclblas: INCLBlast;
try {
  nclblas = require('../build/Release/nclblast');
} catch (_) {
  nclblas = require('./nclblast');
}

// From enums declared in functions/cblas.h
export const NoTrans: MatrixTrans = 111;
export const Trans: MatrixTrans = 112;
export const ConjTrans: MatrixTrans = 113;

export const Upper: MatrixUpperLower = 121;
export const Lower: MatrixUpperLower = 122;

export const NonUnit: MatrixUnit = 131;
export const Unit: MatrixUnit = 132;

export const Left: MatrixLeftRight = 141;
export const Right: MatrixLeftRight = 142;

// BLAS Level 1 Routines and Functions

/**
 * sum of the magnitudes of elements of a real vector
 * res = \sum_i=0^n{|x_i|}
 */
export const dasum: typeof nclblas.dasum = nclblas.dasum;
export const sasum: typeof nclblas.sasum = nclblas.sasum;
export const dzasum: typeof nclblas.dzasum = nclblas.dzasum;
export const scasum: typeof nclblas.scasum = nclblas.scasum;
export const asum: typeof nclblas.asum =
  (x: FloatArray): number =>
    nclblas[`${prefix(x)}asum`](x.length, x, 1);

/**
 * vector-vector operation defined as
 * y := a * x + y
 */
export const daxpy: typeof nclblas.daxpy = nclblas.daxpy;
export const saxpy: typeof nclblas.saxpy = nclblas.saxpy;
export const zaxpy: typeof nclblas.zaxpy = nclblas.zaxpy;
export const caxpy: typeof nclblas.caxpy = nclblas.caxpy;
export const axpy: typeof nclblas.axpy =
  (x: FloatArray, y: FloatArray, a: number = 1): void =>
    nclblas[`${prefix(x)}axpy`](x.length, a, x, 1, y, 1);

/**
 * vector-vector operation defined as
 * y = x
 */
export const dcopy: typeof nclblas.dcopy = nclblas.dcopy;
export const scopy: typeof nclblas.scopy = nclblas.scopy;
export const zcopy: typeof nclblas.zcopy = nclblas.zcopy;
export const ccopy: typeof nclblas.ccopy = nclblas.ccopy;
export const copy: typeof nclblas.copy =
  (x: FloatArray, y: FloatArray): void =>
    nclblas[`${prefix(x)}copy`](x.length, x, 1, y, 1);

/**
 * vector-vector reduction operation defined as
 * res = \sum_i=0^n{x_i * y_i}
 */
export const ddot: typeof nclblas.ddot = nclblas.ddot;
export const sdot: typeof nclblas.sdot = nclblas.sdot;
export const dot: typeof nclblas.dot =
  (x: FloatArray, y: FloatArray): number =>
    nclblas[`${prefix(x)}dot`](x.length, x, 1, y, 1);

/**
 * vector reduction operation defined as
 * res = ||x||
 */
export const dnrm2: typeof nclblas.dnrm2 = nclblas.dnrm2;
export const snrm2: typeof nclblas.snrm2 = nclblas.snrm2;
export const dznrm2: typeof nclblas.dznrm2 = nclblas.dznrm2;
export const scnrm2: typeof nclblas.scnrm2 = nclblas.scnrm2;
export const nrm2: typeof nclblas.nrm2 =
  (x: FloatArray): number =>
    nclblas[`${prefix(x)}nrm2`](x.length, x, 1);

/**
 * rotation of points in the plane
 */
export const drot: typeof nclblas.drot = nclblas.drot;
export const srot: typeof nclblas.srot = nclblas.srot;
export const rot: typeof nclblas.rot =
  (x: FloatArray, y: FloatArray, c: number, s: number): void =>
    nclblas[`${prefix(x)}rot`](x.length, x, 1, y, 1, c, s);

/**
 * computes the parameters for a Givens rotation
 */
export const drotg: typeof nclblas.drotg = nclblas.drotg;
export const srotg: typeof nclblas.srotg = nclblas.srotg;
export const rotg: typeof nclblas.rotg =
  (a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void =>
    nclblas[`${prefix(a)}rotg`](a, b, c, s);

/**
 * performs modified Givens rotation of points in the plane
 */
export const drotm: typeof nclblas.drotm = nclblas.drotm;
export const srotm: typeof nclblas.srotm = nclblas.srotm;
export const rotm: typeof nclblas.rotm =
  (x: FloatArray, y: FloatArray, param: FloatArray): void =>
    nclblas[`${prefix(x)}rotm`](x.length, x, 1, y, 1, param);

/**
 * computes the parameters for a modified Givens rotation.
 */
export const drotmg: typeof nclblas.drotmg = nclblas.drotmg;
export const srotmg: typeof nclblas.srotmg = nclblas.srotmg;
export const rotmg: typeof nclblas.rotmg =
  (d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void =>
    nclblas[`${prefix(d1)}rotmg`](d1, d2, x1, y1, param);

/**
 * vector operation defined as
 * x = a * x
 */
export const dscal: typeof nclblas.dscal = nclblas.dscal;
export const sscal: typeof nclblas.sscal = nclblas.sscal;
export const zscal: typeof nclblas.zscal = nclblas.zscal;
export const cscal: typeof nclblas.cscal = nclblas.cscal;
export const scal: typeof nclblas.scal =
  (x: FloatArray, a: number): void =>
    nclblas[`${prefix(x)}scal`](x.length, a, x, 1);

/**
 * given two vectors x and y, the vectors y and x swapped, each replacing the other.
 */
export const dswap: typeof nclblas.dswap = nclblas.dswap;
export const sswap: typeof nclblas.sswap = nclblas.sswap;
export const zswap: typeof nclblas.zswap = nclblas.zswap;
export const cswap: typeof nclblas.cswap = nclblas.cswap;
export const swap: typeof nclblas.swap =
  (x: FloatArray, y: FloatArray): void =>
    nclblas[`${prefix(x)}swap`](x.length, x, 1, y, 1);

/**
 * finds the index of the element with maximum absolute value.
 */
export const idamax: typeof nclblas.idamax = nclblas.idamax;
export const isamax: typeof nclblas.isamax = nclblas.isamax;
export const izamax: typeof nclblas.izamax = nclblas.izamax;
export const icamax: typeof nclblas.icamax = nclblas.icamax;
export const iamax: typeof nclblas.iamax =
  (x: FloatArray): number =>
    nclblas[`i${prefix(x)}amax`](x.length, x, 1);

// BLAS Level 2 Routines

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general band matrix with kl sub-diagonals and ku super-diagonals
 */
export const dgbmv: typeof nclblas.dgbmv = nclblas.dgbmv;
export const sgbmv: typeof nclblas.sgbmv = nclblas.sgbmv;
export const zgbmv: typeof nclblas.zgbmv = nclblas.zgbmv;
export const cgbmv: typeof nclblas.cgbmv = nclblas.cgbmv;
export const gbmv: typeof nclblas.gbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   kl: number = 0, ku: number = 0, alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nclblas[`${prefix(x)}gbmv`](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general matrix
 */
export const dgemv: typeof nclblas.dgemv = nclblas.dgemv;
export const sgemv: typeof nclblas.sgemv = nclblas.sgemv;
export const zgemv: typeof nclblas.zgemv = nclblas.zgemv;
export const cgemv: typeof nclblas.cgemv = nclblas.cgemv;
export const gemv: typeof nclblas.gemv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nclblas[`${prefix(x)}gemv`](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + A
 * where A is a general matrix
 */
export const dger: typeof nclblas.dger = nclblas.dger;
export const sger: typeof nclblas.sger = nclblas.sger;
export const ger: typeof nclblas.ger =
  (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1): void =>
    nclblas[`${prefix(x)}ger`](x.length, y.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric band matrix with k super-diagonals
 */
export const dsbmv: typeof nclblas.dsbmv = nclblas.dsbmv;
export const ssbmv: typeof nclblas.ssbmv = nclblas.ssbmv;
export const sbmv: typeof nclblas.sbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   k: number = 0, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(x)}sbmv`](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspmv: typeof nclblas.dspmv = nclblas.dspmv;
export const sspmv: typeof nclblas.sspmv = nclblas.sspmv;
export const spmv: typeof nclblas.spmv =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(x)}spmv`](uplo, x.length, alpha, ap, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr: typeof nclblas.dspr = nclblas.dspr;
export const sspr: typeof nclblas.sspr = nclblas.sspr;
export const spr: typeof nclblas.spr =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblas[`${prefix(x)}spr`](uplo, x.length, alpha, x, 1, ap);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr2: typeof nclblas.dspr2 = nclblas.dspr2;
export const sspr2: typeof nclblas.sspr2 = nclblas.sspr2;
export const spr2: typeof nclblas.spr2 =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblas[`${prefix(x)}spr2`](uplo, x.length, alpha, x, 1, y, 1, ap);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric matrix
 */
export const dsymv: typeof nclblas.dsymv = nclblas.dsymv;
export const ssymv: typeof nclblas.ssymv = nclblas.ssymv;
export const symv: typeof nclblas.symv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(x)}symv`](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix
 */
export const dsyr: typeof nclblas.dsyr = nclblas.dsyr;
export const ssyr: typeof nclblas.ssyr = nclblas.ssyr;
export const syr: typeof nclblas.syr =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblas[`${prefix(x)}syr`](uplo, x.length, alpha, x, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix
 */
export const dsyr2: typeof nclblas.dsyr2 = nclblas.dsyr2;
export const ssyr2: typeof nclblas.ssyr2 = nclblas.ssyr2;
export const syr2: typeof nclblas.syr2 =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblas[`${prefix(x)}syr2`](uplo, x.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbmv: typeof nclblas.dtbmv = nclblas.dtbmv;
export const stbmv: typeof nclblas.stbmv = nclblas.stbmv;
export const ztbmv: typeof nclblas.ztbmv = nclblas.ztbmv;
export const ctbmv: typeof nclblas.ctbmv = nclblas.ctbmv;
export const tbmv: typeof nclblas.tbmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}tbmv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbsv: typeof nclblas.dtbsv = nclblas.dtbsv;
export const stbsv: typeof nclblas.stbsv = nclblas.stbsv;
export const ztbsv: typeof nclblas.ztbsv = nclblas.ztbsv;
export const ctbsv: typeof nclblas.ctbsv = nclblas.ctbsv;
export const tbsv: typeof nclblas.tbsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}tbsv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpmv: typeof nclblas.dtpmv = nclblas.dtpmv;
export const stpmv: typeof nclblas.stpmv = nclblas.stpmv;
export const ztpmv: typeof nclblas.ztpmv = nclblas.ztpmv;
export const ctpmv: typeof nclblas.ctpmv = nclblas.ctpmv;
export const tpmv: typeof nclblas.tpmv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}tpmv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpsv: typeof nclblas.dtpsv = nclblas.dtpsv;
export const stpsv: typeof nclblas.stpsv = nclblas.stpsv;
export const ztpsv: typeof nclblas.ztpsv = nclblas.ztpsv;
export const ctpsv: typeof nclblas.ctpsv = nclblas.ctpsv;
export const tpsv: typeof nclblas.tpsv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}tpsv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmv: typeof nclblas.dtrmv = nclblas.dtrmv;
export const strmv: typeof nclblas.strmv = nclblas.strmv;
export const ztrmv: typeof nclblas.ztrmv = nclblas.ztrmv;
export const ctrmv: typeof nclblas.ctrmv = nclblas.ctrmv;
export const trmv: typeof nclblas.trmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}trmv`](uplo, trans, diag, x.length, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsv: typeof nclblas.dtrsv = nclblas.dtrsv;
export const strsv: typeof nclblas.strsv = nclblas.strsv;
export const ztrsv: typeof nclblas.ztrsv = nclblas.ztrsv;
export const ctrsv: typeof nclblas.ctrsv = nclblas.ctrsv;
export const trsv: typeof nclblas.trsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblas[`${prefix(x)}trsv`](uplo, trans, diag, x.length, a, x.length, x, 1);

// BLAS Level 3 Routines

/**
 * computes a scalar-matrix-matrix product and adds the result to a scalar-matrix product defined as
 * C := alpha * op(A) * op(B) + beta * C
 */
export const dgemm: typeof nclblas.dgemm = nclblas.dgemm;
export const sgemm: typeof nclblas.sgemm = nclblas.sgemm;
export const zgemm: typeof nclblas.zgemm = nclblas.zgemm;
export const cgemm: typeof nclblas.cgemm = nclblas.cgemm;
export const gemm: typeof nclblas.gemm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, k: number,
   transa: MatrixTrans = NoTrans, transb: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(a)}gemm`](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one symmetric matrix and
 * adds the result to a scalar-matrix product defined as
 * C := alpha * A * B + beta * C
 * or
 * C := alpha * B * A + beta * C
 * where A is a symmetric matrix
 */
export const dsymm: typeof nclblas.dsymm = nclblas.dsymm;
export const ssymm: typeof nclblas.ssymm = nclblas.ssymm;
export const zsymm: typeof nclblas.zsymm = nclblas.zsymm;
export const csymm: typeof nclblas.csymm = nclblas.csymm;
export const symm: typeof nclblas.symm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(a)}symm`](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);

/**
 * performs a rank-k matrix-matrix operation for a symmetric matrix C using a general matrix A defined as
 * C := alpha * A * A' + beta * C
 * or
 * C := alpha * A' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyrk: typeof nclblas.dsyrk = nclblas.dsyrk;
export const ssyrk: typeof nclblas.ssyrk = nclblas.ssyrk;
export const zsyrk: typeof nclblas.zsyrk = nclblas.zsyrk;
export const csyrk: typeof nclblas.csyrk = nclblas.csyrk;
export const syrk: typeof nclblas.syrk =
  (a: FloatArray, c: FloatArray, n: FloatArray, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(a)}syrk`](uplo, trans, n, k, alpha, a, n, beta, c, n);

/**
 * perform a rank-2k matrix-matrix operation for a symmetric matrix C using general matrices A and B defined as
 * C := alpha * A * B' + alpha * B * A' + beta * C
 * or
 * C := alpha * A' * B + alpha * B' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyr2k: typeof nclblas.dsyr2k = nclblas.dsyr2k;
export const ssyr2k: typeof nclblas.ssyr2k = nclblas.ssyr2k;
export const zsyr2k: typeof nclblas.zsyr2k = nclblas.zsyr2k;
export const csyr2k: typeof nclblas.csyr2k = nclblas.csyr2k;
export const syr2k: typeof nclblas.syr2k =
  (a: FloatArray, b: FloatArray, c: FloatArray, n: number, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblas[`${prefix(a)}syr2k`](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one triangular matrix defined as
 * B := alpha * op(A) * B
 * or
 * B := alpha * B * op(A)
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmm: typeof nclblas.dtrmm = nclblas.dtrmm;
export const strmm: typeof nclblas.strmm = nclblas.strmm;
export const ztrmm: typeof nclblas.ztrmm = nclblas.ztrmm;
export const ctrmm: typeof nclblas.ctrmm = nclblas.ctrmm;
export const trmm: typeof nclblas.trmm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nclblas[`${prefix(a)}trmm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

/**
 * solves one of the following matrix equations
 * op(A) * X = alpha * B
 * or
 * X * op(A) = alpha * B
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsm: typeof nclblas.dtrsm = nclblas.dtrsm;
export const strsm: typeof nclblas.strsm = nclblas.strsm;
export const ztrsm: typeof nclblas.ztrsm = nclblas.ztrsm;
export const ctrsm: typeof nclblas.ctrsm = nclblas.ctrsm;
export const trsm: typeof nclblas.trsm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nclblas[`${prefix(a)}trsm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
