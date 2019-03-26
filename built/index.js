"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var nblas;
try {
    nblas = require('../build/Release/nblas');
}
catch (_) {
    nblas = require('./nblas');
}
exports.NoTrans = 111;
exports.Trans = 112;
exports.ConjTrans = 113;
exports.Upper = 121;
exports.Lower = 122;
exports.NonUnit = 131;
exports.Unit = 132;
exports.Left = 141;
exports.Right = 142;
exports.dasum = nblas.dasum;
exports.sasum = nblas.sasum;
exports.dzasum = nblas.dzasum;
exports.scasum = nblas.scasum;
exports.asum = function (x) {
    return nblas[util_1.prefix(x) + "asum"](x.length, x, 1);
};
exports.daxpy = nblas.daxpy;
exports.saxpy = nblas.saxpy;
exports.zaxpy = nblas.zaxpy;
exports.caxpy = nblas.caxpy;
exports.axpy = function (x, y, a) {
    if (a === void 0) { a = 1; }
    return nblas[util_1.prefix(x) + "axpy"](x.length, a, x, 1, y, 1);
};
exports.dcopy = nblas.dcopy;
exports.scopy = nblas.scopy;
exports.zcopy = nblas.zcopy;
exports.ccopy = nblas.ccopy;
exports.copy = function (x, y) {
    return nblas[util_1.prefix(x) + "copy"](x.length, x, 1, y, 1);
};
exports.ddot = nblas.ddot;
exports.sdot = nblas.sdot;
exports.dot = function (x, y) {
    return nblas[util_1.prefix(x) + "dot"](x.length, x, 1, y, 1);
};
exports.dnrm2 = nblas.dnrm2;
exports.snrm2 = nblas.snrm2;
exports.dznrm2 = nblas.dznrm2;
exports.scnrm2 = nblas.scnrm2;
exports.nrm2 = function (x) {
    return nblas[util_1.prefix(x) + "nrm2"](x.length, x, 1);
};
exports.drot = nblas.drot;
exports.srot = nblas.srot;
exports.rot = function (x, y, c, s) {
    return nblas[util_1.prefix(x) + "rot"](x.length, x, 1, y, 1, c, s);
};
exports.drotg = nblas.drotg;
exports.srotg = nblas.srotg;
exports.rotg = function (a, b, c, s) {
    return nblas[util_1.prefix(a) + "rotg"](a, b, c, s);
};
exports.drotm = nblas.drotm;
exports.srotm = nblas.srotm;
exports.rotm = function (x, y, param) {
    return nblas[util_1.prefix(x) + "rotm"](x.length, x, 1, y, 1, param);
};
exports.drotmg = nblas.drotmg;
exports.srotmg = nblas.srotmg;
exports.rotmg = function (d1, d2, x1, y1, param) {
    return nblas[util_1.prefix(d1) + "rotmg"](d1, d2, x1, y1, param);
};
exports.dscal = nblas.dscal;
exports.sscal = nblas.sscal;
exports.zscal = nblas.zscal;
exports.cscal = nblas.cscal;
exports.scal = function (x, a) {
    return nblas[util_1.prefix(x) + "scal"](x.length, a, x, 1);
};
exports.dswap = nblas.dswap;
exports.sswap = nblas.sswap;
exports.zswap = nblas.zswap;
exports.cswap = nblas.cswap;
exports.swap = function (x, y) {
    return nblas[util_1.prefix(x) + "swap"](x.length, x, 1, y, 1);
};
exports.idamax = nblas.idamax;
exports.isamax = nblas.isamax;
exports.izamax = nblas.izamax;
exports.icamax = nblas.icamax;
exports.iamax = function (x) {
    return nblas["i" + util_1.prefix(x) + "amax"](x.length, x, 1);
};
exports.dgbmv = nblas.dgbmv;
exports.sgbmv = nblas.sgbmv;
exports.zgbmv = nblas.zgbmv;
exports.cgbmv = nblas.cgbmv;
exports.gbmv = function (a, x, y, kl, ku, alpha, beta, trans) {
    if (kl === void 0) { kl = 0; }
    if (ku === void 0) { ku = 0; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nblas[util_1.prefix(x) + "gbmv"](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dgemv = nblas.dgemv;
exports.sgemv = nblas.sgemv;
exports.zgemv = nblas.zgemv;
exports.cgemv = nblas.cgemv;
exports.gemv = function (a, x, y, alpha, beta, trans) {
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nblas[util_1.prefix(x) + "gemv"](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dger = nblas.dger;
exports.sger = nblas.sger;
exports.ger = function (a, x, y, alpha) {
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(x) + "ger"](x.length, y.length, alpha, x, 1, y, 1, a, x.length);
};
exports.dsbmv = nblas.dsbmv;
exports.ssbmv = nblas.ssbmv;
exports.sbmv = function (a, x, y, k, uplo, alpha, beta) {
    if (k === void 0) { k = 0; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(x) + "sbmv"](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dspmv = nblas.dspmv;
exports.sspmv = nblas.sspmv;
exports.spmv = function (ap, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(x) + "spmv"](uplo, x.length, alpha, ap, x, 1, beta, y, 1);
};
exports.dspr = nblas.dspr;
exports.sspr = nblas.sspr;
exports.spr = function (ap, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(x) + "spr"](uplo, x.length, alpha, x, 1, ap);
};
exports.dspr2 = nblas.dspr2;
exports.sspr2 = nblas.sspr2;
exports.spr2 = function (ap, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(x) + "spr2"](uplo, x.length, alpha, x, 1, y, 1, ap);
};
exports.dsymv = nblas.dsymv;
exports.ssymv = nblas.ssymv;
exports.symv = function (a, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(x) + "symv"](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dsyr = nblas.dsyr;
exports.ssyr = nblas.ssyr;
exports.syr = function (a, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(x) + "syr"](uplo, x.length, alpha, x, 1, a, x.length);
};
exports.dsyr2 = nblas.dsyr2;
exports.ssyr2 = nblas.ssyr2;
exports.syr2 = function (a, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(x) + "syr2"](uplo, x.length, alpha, x, 1, y, 1, a, x.length);
};
exports.dtbmv = nblas.dtbmv;
exports.stbmv = nblas.stbmv;
exports.ztbmv = nblas.ztbmv;
exports.ctbmv = nblas.ctbmv;
exports.tbmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "tbmv"](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.dtbsv = nblas.dtbsv;
exports.stbsv = nblas.stbsv;
exports.ztbsv = nblas.ztbsv;
exports.ctbsv = nblas.ctbsv;
exports.tbsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "tbsv"](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.dtpmv = nblas.dtpmv;
exports.stpmv = nblas.stpmv;
exports.ztpmv = nblas.ztpmv;
exports.ctpmv = nblas.ctpmv;
exports.tpmv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "tpmv"](uplo, trans, diag, x.length, ap, x, 1);
};
exports.dtpsv = nblas.dtpsv;
exports.stpsv = nblas.stpsv;
exports.ztpsv = nblas.ztpsv;
exports.ctpsv = nblas.ctpsv;
exports.tpsv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "tpsv"](uplo, trans, diag, x.length, ap, x, 1);
};
exports.dtrmv = nblas.dtrmv;
exports.strmv = nblas.strmv;
exports.ztrmv = nblas.ztrmv;
exports.ctrmv = nblas.ctrmv;
exports.trmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "trmv"](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.dtrsv = nblas.dtrsv;
exports.strsv = nblas.strsv;
exports.ztrsv = nblas.ztrsv;
exports.ctrsv = nblas.ctrsv;
exports.trsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas[util_1.prefix(x) + "trsv"](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.dgemm = nblas.dgemm;
exports.sgemm = nblas.sgemm;
exports.zgemm = nblas.zgemm;
exports.cgemm = nblas.cgemm;
exports.gemm = function (a, b, c, m, n, k, transa, transb, alpha, beta) {
    if (transa === void 0) { transa = exports.NoTrans; }
    if (transb === void 0) { transb = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(a) + "gemm"](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);
};
exports.dsymm = nblas.dsymm;
exports.ssymm = nblas.ssymm;
exports.zsymm = nblas.zsymm;
exports.csymm = nblas.csymm;
exports.symm = function (a, b, c, m, n, side, uplo, alpha, beta) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(a) + "symm"](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);
};
exports.dsyrk = nblas.dsyrk;
exports.ssyrk = nblas.ssyrk;
exports.zsyrk = nblas.zsyrk;
exports.csyrk = nblas.csyrk;
exports.syrk = function (a, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(a) + "syrk"](uplo, trans, n, k, alpha, a, n, beta, c, n);
};
exports.dsyr2k = nblas.dsyr2k;
exports.ssyr2k = nblas.ssyr2k;
exports.zsyr2k = nblas.zsyr2k;
exports.csyr2k = nblas.csyr2k;
exports.syr2k = function (a, b, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas[util_1.prefix(a) + "syr2k"](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);
};
exports.dtrmm = nblas.dtrmm;
exports.strmm = nblas.strmm;
exports.ztrmm = nblas.ztrmm;
exports.ctrmm = nblas.ctrmm;
exports.trmm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(a) + "trmm"](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
exports.dtrsm = nblas.dtrsm;
exports.strsm = nblas.strsm;
exports.ztrsm = nblas.ztrsm;
exports.ctrsm = nblas.ctrsm;
exports.trsm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nblas[util_1.prefix(a) + "trsm"](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
