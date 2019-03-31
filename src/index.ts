import {
  FloatArray,
  INCLBlast,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
} from './types';
import { prefix } from './util';

let nclblast: INCLBlast;
try {
  nclblast = require('../build/Release/nclblast');
} catch (_) {
  nclblast = require('./nclblast');
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
export const dasum: typeof nclblast.dasum = nclblast.dasum;
export const sasum: typeof nclblast.sasum = nclblast.sasum;
export const dzasum: typeof nclblast.dzasum = nclblast.dzasum;
export const scasum: typeof nclblast.scasum = nclblast.scasum;
export const asum: typeof nclblast.asum =
  (x: FloatArray): number =>
    nclblast[`${prefix(x)}asum`](x.length, x, 1);

/**
 * vector-vector operation defined as
 * y := a * x + y
 */
export const daxpy: typeof nclblast.daxpy = nclblast.daxpy;
export const saxpy: typeof nclblast.saxpy = nclblast.saxpy;
export const zaxpy: typeof nclblast.zaxpy = nclblast.zaxpy;
export const caxpy: typeof nclblast.caxpy = nclblast.caxpy;
export const axpy: typeof nclblast.axpy =
  (x: FloatArray, y: FloatArray, a: number = 1): void =>
    nclblast[`${prefix(x)}axpy`](x.length, a, x, 1, y, 1);

/**
 * vector-vector operation defined as
 * y = x
 */
export const dcopy: typeof nclblast.dcopy = nclblast.dcopy;
export const scopy: typeof nclblast.scopy = nclblast.scopy;
export const zcopy: typeof nclblast.zcopy = nclblast.zcopy;
export const ccopy: typeof nclblast.ccopy = nclblast.ccopy;
export const copy: typeof nclblast.copy =
  (x: FloatArray, y: FloatArray): void =>
    nclblast[`${prefix(x)}copy`](x.length, x, 1, y, 1);

/**
 * vector-vector reduction operation defined as
 * res = \sum_i=0^n{x_i * y_i}
 */
export const ddot: typeof nclblast.ddot = nclblast.ddot;
export const sdot: typeof nclblast.sdot = nclblast.sdot;
export const dot: typeof nclblast.dot =
  (x: FloatArray, y: FloatArray): number =>
    nclblast[`${prefix(x)}dot`](x.length, x, 1, y, 1);

/**
 * vector reduction operation defined as
 * res = ||x||
 */
export const dnrm2: typeof nclblast.dnrm2 = nclblast.dnrm2;
export const snrm2: typeof nclblast.snrm2 = nclblast.snrm2;
export const dznrm2: typeof nclblast.dznrm2 = nclblast.dznrm2;
export const scnrm2: typeof nclblast.scnrm2 = nclblast.scnrm2;
export const nrm2: typeof nclblast.nrm2 =
  (x: FloatArray): number =>
    nclblast[`${prefix(x)}nrm2`](x.length, x, 1);

/**
 * rotation of points in the plane
 */
export const drot: typeof nclblast.drot = nclblast.drot;
export const srot: typeof nclblast.srot = nclblast.srot;
export const rot: typeof nclblast.rot =
  (x: FloatArray, y: FloatArray, c: number, s: number): void =>
    nclblast[`${prefix(x)}rot`](x.length, x, 1, y, 1, c, s);

/**
 * computes the parameters for a Givens rotation
 */
export const drotg: typeof nclblast.drotg = nclblast.drotg;
export const srotg: typeof nclblast.srotg = nclblast.srotg;
export const rotg: typeof nclblast.rotg =
  (a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void =>
    nclblast[`${prefix(a)}rotg`](a, b, c, s);

/**
 * performs modified Givens rotation of points in the plane
 */
export const drotm: typeof nclblast.drotm = nclblast.drotm;
export const srotm: typeof nclblast.srotm = nclblast.srotm;
export const rotm: typeof nclblast.rotm =
  (x: FloatArray, y: FloatArray, param: FloatArray): void =>
    nclblast[`${prefix(x)}rotm`](x.length, x, 1, y, 1, param);

/**
 * computes the parameters for a modified Givens rotation.
 */
export const drotmg: typeof nclblast.drotmg = nclblast.drotmg;
export const srotmg: typeof nclblast.srotmg = nclblast.srotmg;
export const rotmg: typeof nclblast.rotmg =
  (d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void =>
    nclblast[`${prefix(d1)}rotmg`](d1, d2, x1, y1, param);

/**
 * vector operation defined as
 * x = a * x
 */
export const dscal: typeof nclblast.dscal = nclblast.dscal;
export const sscal: typeof nclblast.sscal = nclblast.sscal;
export const zscal: typeof nclblast.zscal = nclblast.zscal;
export const cscal: typeof nclblast.cscal = nclblast.cscal;
export const scal: typeof nclblast.scal =
  (x: FloatArray, a: number): void =>
    nclblast[`${prefix(x)}scal`](x.length, a, x, 1);

/**
 * given two vectors x and y, the vectors y and x swapped, each replacing the other.
 */
export const dswap: typeof nclblast.dswap = nclblast.dswap;
export const sswap: typeof nclblast.sswap = nclblast.sswap;
export const zswap: typeof nclblast.zswap = nclblast.zswap;
export const cswap: typeof nclblast.cswap = nclblast.cswap;
export const swap: typeof nclblast.swap =
  (x: FloatArray, y: FloatArray): void =>
    nclblast[`${prefix(x)}swap`](x.length, x, 1, y, 1);

/**
 * finds the index of the element with maximum absolute value.
 */
export const idamax: typeof nclblast.idamax = nclblast.idamax;
export const isamax: typeof nclblast.isamax = nclblast.isamax;
export const izamax: typeof nclblast.izamax = nclblast.izamax;
export const icamax: typeof nclblast.icamax = nclblast.icamax;
export const iamax: typeof nclblast.iamax =
  (x: FloatArray): number =>
    nclblast[`i${prefix(x)}amax`](x.length, x, 1);

// BLAS Level 2 Routines

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general band matrix with kl sub-diagonals and ku super-diagonals
 */
export const dgbmv: typeof nclblast.dgbmv = nclblast.dgbmv;
export const sgbmv: typeof nclblast.sgbmv = nclblast.sgbmv;
export const zgbmv: typeof nclblast.zgbmv = nclblast.zgbmv;
export const cgbmv: typeof nclblast.cgbmv = nclblast.cgbmv;
export const gbmv: typeof nclblast.gbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   kl: number = 0, ku: number = 0, alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nclblast[`${prefix(x)}gbmv`](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general matrix
 */
export const dgemv: typeof nclblast.dgemv = nclblast.dgemv;
export const sgemv: typeof nclblast.sgemv = nclblast.sgemv;
export const zgemv: typeof nclblast.zgemv = nclblast.zgemv;
export const cgemv: typeof nclblast.cgemv = nclblast.cgemv;
export const gemv: typeof nclblast.gemv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nclblast[`${prefix(x)}gemv`](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + A
 * where A is a general matrix
 */
export const dger: typeof nclblast.dger = nclblast.dger;
export const sger: typeof nclblast.sger = nclblast.sger;
export const ger: typeof nclblast.ger =
  (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1): void =>
    nclblast[`${prefix(x)}ger`](x.length, y.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric band matrix with k super-diagonals
 */
export const dsbmv: typeof nclblast.dsbmv = nclblast.dsbmv;
export const ssbmv: typeof nclblast.ssbmv = nclblast.ssbmv;
export const sbmv: typeof nclblast.sbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   k: number = 0, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(x)}sbmv`](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspmv: typeof nclblast.dspmv = nclblast.dspmv;
export const sspmv: typeof nclblast.sspmv = nclblast.sspmv;
export const spmv: typeof nclblast.spmv =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(x)}spmv`](uplo, x.length, alpha, ap, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr: typeof nclblast.dspr = nclblast.dspr;
export const sspr: typeof nclblast.sspr = nclblast.sspr;
export const spr: typeof nclblast.spr =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblast[`${prefix(x)}spr`](uplo, x.length, alpha, x, 1, ap);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr2: typeof nclblast.dspr2 = nclblast.dspr2;
export const sspr2: typeof nclblast.sspr2 = nclblast.sspr2;
export const spr2: typeof nclblast.spr2 =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblast[`${prefix(x)}spr2`](uplo, x.length, alpha, x, 1, y, 1, ap);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric matrix
 */
export const dsymv: typeof nclblast.dsymv = nclblast.dsymv;
export const ssymv: typeof nclblast.ssymv = nclblast.ssymv;
export const symv: typeof nclblast.symv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(x)}symv`](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix
 */
export const dsyr: typeof nclblast.dsyr = nclblast.dsyr;
export const ssyr: typeof nclblast.ssyr = nclblast.ssyr;
export const syr: typeof nclblast.syr =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblast[`${prefix(x)}syr`](uplo, x.length, alpha, x, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix
 */
export const dsyr2: typeof nclblast.dsyr2 = nclblast.dsyr2;
export const ssyr2: typeof nclblast.ssyr2 = nclblast.ssyr2;
export const syr2: typeof nclblast.syr2 =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nclblast[`${prefix(x)}syr2`](uplo, x.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbmv: typeof nclblast.dtbmv = nclblast.dtbmv;
export const stbmv: typeof nclblast.stbmv = nclblast.stbmv;
export const ztbmv: typeof nclblast.ztbmv = nclblast.ztbmv;
export const ctbmv: typeof nclblast.ctbmv = nclblast.ctbmv;
export const tbmv: typeof nclblast.tbmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}tbmv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbsv: typeof nclblast.dtbsv = nclblast.dtbsv;
export const stbsv: typeof nclblast.stbsv = nclblast.stbsv;
export const ztbsv: typeof nclblast.ztbsv = nclblast.ztbsv;
export const ctbsv: typeof nclblast.ctbsv = nclblast.ctbsv;
export const tbsv: typeof nclblast.tbsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}tbsv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpmv: typeof nclblast.dtpmv = nclblast.dtpmv;
export const stpmv: typeof nclblast.stpmv = nclblast.stpmv;
export const ztpmv: typeof nclblast.ztpmv = nclblast.ztpmv;
export const ctpmv: typeof nclblast.ctpmv = nclblast.ctpmv;
export const tpmv: typeof nclblast.tpmv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}tpmv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpsv: typeof nclblast.dtpsv = nclblast.dtpsv;
export const stpsv: typeof nclblast.stpsv = nclblast.stpsv;
export const ztpsv: typeof nclblast.ztpsv = nclblast.ztpsv;
export const ctpsv: typeof nclblast.ctpsv = nclblast.ctpsv;
export const tpsv: typeof nclblast.tpsv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}tpsv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmv: typeof nclblast.dtrmv = nclblast.dtrmv;
export const strmv: typeof nclblast.strmv = nclblast.strmv;
export const ztrmv: typeof nclblast.ztrmv = nclblast.ztrmv;
export const ctrmv: typeof nclblast.ctrmv = nclblast.ctrmv;
export const trmv: typeof nclblast.trmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}trmv`](uplo, trans, diag, x.length, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsv: typeof nclblast.dtrsv = nclblast.dtrsv;
export const strsv: typeof nclblast.strsv = nclblast.strsv;
export const ztrsv: typeof nclblast.ztrsv = nclblast.ztrsv;
export const ctrsv: typeof nclblast.ctrsv = nclblast.ctrsv;
export const trsv: typeof nclblast.trsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nclblast[`${prefix(x)}trsv`](uplo, trans, diag, x.length, a, x.length, x, 1);

// BLAS Level 3 Routines

/**
 * computes a scalar-matrix-matrix product and adds the result to a scalar-matrix product defined as
 * C := alpha * op(A) * op(B) + beta * C
 */
export const dgemm: typeof nclblast.dgemm = nclblast.dgemm;
export const sgemm: typeof nclblast.sgemm = nclblast.sgemm;
export const zgemm: typeof nclblast.zgemm = nclblast.zgemm;
export const cgemm: typeof nclblast.cgemm = nclblast.cgemm;
export const gemm: typeof nclblast.gemm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, k: number,
   transa: MatrixTrans = NoTrans, transb: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(a)}gemm`](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one symmetric matrix and
 * adds the result to a scalar-matrix product defined as
 * C := alpha * A * B + beta * C
 * or
 * C := alpha * B * A + beta * C
 * where A is a symmetric matrix
 */
export const dsymm: typeof nclblast.dsymm = nclblast.dsymm;
export const ssymm: typeof nclblast.ssymm = nclblast.ssymm;
export const zsymm: typeof nclblast.zsymm = nclblast.zsymm;
export const csymm: typeof nclblast.csymm = nclblast.csymm;
export const symm: typeof nclblast.symm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(a)}symm`](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);

/**
 * performs a rank-k matrix-matrix operation for a symmetric matrix C using a general matrix A defined as
 * C := alpha * A * A' + beta * C
 * or
 * C := alpha * A' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyrk: typeof nclblast.dsyrk = nclblast.dsyrk;
export const ssyrk: typeof nclblast.ssyrk = nclblast.ssyrk;
export const zsyrk: typeof nclblast.zsyrk = nclblast.zsyrk;
export const csyrk: typeof nclblast.csyrk = nclblast.csyrk;
export const syrk: typeof nclblast.syrk =
  (a: FloatArray, c: FloatArray, n: FloatArray, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(a)}syrk`](uplo, trans, n, k, alpha, a, n, beta, c, n);

/**
 * perform a rank-2k matrix-matrix operation for a symmetric matrix C using general matrices A and B defined as
 * C := alpha * A * B' + alpha * B * A' + beta * C
 * or
 * C := alpha * A' * B + alpha * B' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyr2k: typeof nclblast.dsyr2k = nclblast.dsyr2k;
export const ssyr2k: typeof nclblast.ssyr2k = nclblast.ssyr2k;
export const zsyr2k: typeof nclblast.zsyr2k = nclblast.zsyr2k;
export const csyr2k: typeof nclblast.csyr2k = nclblast.csyr2k;
export const syr2k: typeof nclblast.syr2k =
  (a: FloatArray, b: FloatArray, c: FloatArray, n: number, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nclblast[`${prefix(a)}syr2k`](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one triangular matrix defined as
 * B := alpha * op(A) * B
 * or
 * B := alpha * B * op(A)
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmm: typeof nclblast.dtrmm = nclblast.dtrmm;
export const strmm: typeof nclblast.strmm = nclblast.strmm;
export const ztrmm: typeof nclblast.ztrmm = nclblast.ztrmm;
export const ctrmm: typeof nclblast.ctrmm = nclblast.ctrmm;
export const trmm: typeof nclblast.trmm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nclblast[`${prefix(a)}trmm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

/**
 * solves one of the following matrix equations
 * op(A) * X = alpha * B
 * or
 * X * op(A) = alpha * B
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsm: typeof nclblast.dtrsm = nclblast.dtrsm;
export const strsm: typeof nclblast.strsm = nclblast.strsm;
export const ztrsm: typeof nclblast.ztrsm = nclblast.ztrsm;
export const ctrsm: typeof nclblast.ctrsm = nclblast.ctrsm;
export const trsm: typeof nclblast.trsm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nclblast[`${prefix(a)}trsm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
