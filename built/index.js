"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var nclblast;
try {
    nclblast = require('../build/Release/nclblast');
}
catch (_) {
    nclblast = require('./nclblast');
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
exports.dasum = nclblast.dasum;
exports.sasum = nclblast.sasum;
exports.dzasum = nclblast.dzasum;
exports.scasum = nclblast.scasum;
exports.asum = function (x) {
    return nclblast[util_1.prefix(x) + "asum"](x.length, x, 1);
};
exports.daxpy = nclblast.daxpy;
exports.saxpy = nclblast.saxpy;
exports.zaxpy = nclblast.zaxpy;
exports.caxpy = nclblast.caxpy;
exports.axpy = function (x, y, a) {
    if (a === void 0) { a = 1; }
    return nclblast[util_1.prefix(x) + "axpy"](x.length, a, x, 1, y, 1);
};
exports.dcopy = nclblast.dcopy;
exports.scopy = nclblast.scopy;
exports.zcopy = nclblast.zcopy;
exports.ccopy = nclblast.ccopy;
exports.copy = function (x, y) {
    return nclblast[util_1.prefix(x) + "copy"](x.length, x, 1, y, 1);
};
exports.ddot = nclblast.ddot;
exports.sdot = nclblast.sdot;
exports.dot = function (x, y) {
    return nclblast[util_1.prefix(x) + "dot"](x.length, x, 1, y, 1);
};
exports.dnrm2 = nclblast.dnrm2;
exports.snrm2 = nclblast.snrm2;
exports.dznrm2 = nclblast.dznrm2;
exports.scnrm2 = nclblast.scnrm2;
exports.nrm2 = function (x) {
    return nclblast[util_1.prefix(x) + "nrm2"](x.length, x, 1);
};
exports.drot = nclblast.drot;
exports.srot = nclblast.srot;
exports.rot = function (x, y, c, s) {
    return nclblast[util_1.prefix(x) + "rot"](x.length, x, 1, y, 1, c, s);
};
exports.drotg = nclblast.drotg;
exports.srotg = nclblast.srotg;
exports.rotg = function (a, b, c, s) {
    return nclblast[util_1.prefix(a) + "rotg"](a, b, c, s);
};
exports.drotm = nclblast.drotm;
exports.srotm = nclblast.srotm;
exports.rotm = function (x, y, param) {
    return nclblast[util_1.prefix(x) + "rotm"](x.length, x, 1, y, 1, param);
};
exports.drotmg = nclblast.drotmg;
exports.srotmg = nclblast.srotmg;
exports.rotmg = function (d1, d2, x1, y1, param) {
    return nclblast[util_1.prefix(d1) + "rotmg"](d1, d2, x1, y1, param);
};
exports.dscal = nclblast.dscal;
exports.sscal = nclblast.sscal;
exports.zscal = nclblast.zscal;
exports.cscal = nclblast.cscal;
exports.scal = function (x, a) {
    return nclblast[util_1.prefix(x) + "scal"](x.length, a, x, 1);
};
exports.dswap = nclblast.dswap;
exports.sswap = nclblast.sswap;
exports.zswap = nclblast.zswap;
exports.cswap = nclblast.cswap;
exports.swap = function (x, y) {
    return nclblast[util_1.prefix(x) + "swap"](x.length, x, 1, y, 1);
};
exports.idamax = nclblast.idamax;
exports.isamax = nclblast.isamax;
exports.izamax = nclblast.izamax;
exports.icamax = nclblast.icamax;
exports.iamax = function (x) {
    return nclblast["i" + util_1.prefix(x) + "amax"](x.length, x, 1);
};
exports.dgbmv = nclblast.dgbmv;
exports.sgbmv = nclblast.sgbmv;
exports.zgbmv = nclblast.zgbmv;
exports.cgbmv = nclblast.cgbmv;
exports.gbmv = function (a, x, y, kl, ku, alpha, beta, trans) {
    if (kl === void 0) { kl = 0; }
    if (ku === void 0) { ku = 0; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nclblast[util_1.prefix(x) + "gbmv"](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dgemv = nclblast.dgemv;
exports.sgemv = nclblast.sgemv;
exports.zgemv = nclblast.zgemv;
exports.cgemv = nclblast.cgemv;
exports.gemv = function (a, x, y, alpha, beta, trans) {
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nclblast[util_1.prefix(x) + "gemv"](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dger = nclblast.dger;
exports.sger = nclblast.sger;
exports.ger = function (a, x, y, alpha) {
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(x) + "ger"](x.length, y.length, alpha, x, 1, y, 1, a, x.length);
};
exports.dsbmv = nclblast.dsbmv;
exports.ssbmv = nclblast.ssbmv;
exports.sbmv = function (a, x, y, k, uplo, alpha, beta) {
    if (k === void 0) { k = 0; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(x) + "sbmv"](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dspmv = nclblast.dspmv;
exports.sspmv = nclblast.sspmv;
exports.spmv = function (ap, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(x) + "spmv"](uplo, x.length, alpha, ap, x, 1, beta, y, 1);
};
exports.dspr = nclblast.dspr;
exports.sspr = nclblast.sspr;
exports.spr = function (ap, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(x) + "spr"](uplo, x.length, alpha, x, 1, ap);
};
exports.dspr2 = nclblast.dspr2;
exports.sspr2 = nclblast.sspr2;
exports.spr2 = function (ap, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(x) + "spr2"](uplo, x.length, alpha, x, 1, y, 1, ap);
};
exports.dsymv = nclblast.dsymv;
exports.ssymv = nclblast.ssymv;
exports.symv = function (a, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(x) + "symv"](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.dsyr = nclblast.dsyr;
exports.ssyr = nclblast.ssyr;
exports.syr = function (a, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(x) + "syr"](uplo, x.length, alpha, x, 1, a, x.length);
};
exports.dsyr2 = nclblast.dsyr2;
exports.ssyr2 = nclblast.ssyr2;
exports.syr2 = function (a, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(x) + "syr2"](uplo, x.length, alpha, x, 1, y, 1, a, x.length);
};
exports.dtbmv = nclblast.dtbmv;
exports.stbmv = nclblast.stbmv;
exports.ztbmv = nclblast.ztbmv;
exports.ctbmv = nclblast.ctbmv;
exports.tbmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "tbmv"](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.dtbsv = nclblast.dtbsv;
exports.stbsv = nclblast.stbsv;
exports.ztbsv = nclblast.ztbsv;
exports.ctbsv = nclblast.ctbsv;
exports.tbsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "tbsv"](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.dtpmv = nclblast.dtpmv;
exports.stpmv = nclblast.stpmv;
exports.ztpmv = nclblast.ztpmv;
exports.ctpmv = nclblast.ctpmv;
exports.tpmv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "tpmv"](uplo, trans, diag, x.length, ap, x, 1);
};
exports.dtpsv = nclblast.dtpsv;
exports.stpsv = nclblast.stpsv;
exports.ztpsv = nclblast.ztpsv;
exports.ctpsv = nclblast.ctpsv;
exports.tpsv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "tpsv"](uplo, trans, diag, x.length, ap, x, 1);
};
exports.dtrmv = nclblast.dtrmv;
exports.strmv = nclblast.strmv;
exports.ztrmv = nclblast.ztrmv;
exports.ctrmv = nclblast.ctrmv;
exports.trmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "trmv"](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.dtrsv = nclblast.dtrsv;
exports.strsv = nclblast.strsv;
exports.ztrsv = nclblast.ztrsv;
exports.ctrsv = nclblast.ctrsv;
exports.trsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nclblast[util_1.prefix(x) + "trsv"](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.dgemm = nclblast.dgemm;
exports.sgemm = nclblast.sgemm;
exports.zgemm = nclblast.zgemm;
exports.cgemm = nclblast.cgemm;
exports.gemm = function (a, b, c, m, n, k, transa, transb, alpha, beta) {
    if (transa === void 0) { transa = exports.NoTrans; }
    if (transb === void 0) { transb = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(a) + "gemm"](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);
};
exports.dsymm = nclblast.dsymm;
exports.ssymm = nclblast.ssymm;
exports.zsymm = nclblast.zsymm;
exports.csymm = nclblast.csymm;
exports.symm = function (a, b, c, m, n, side, uplo, alpha, beta) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(a) + "symm"](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);
};
exports.dsyrk = nclblast.dsyrk;
exports.ssyrk = nclblast.ssyrk;
exports.zsyrk = nclblast.zsyrk;
exports.csyrk = nclblast.csyrk;
exports.syrk = function (a, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(a) + "syrk"](uplo, trans, n, k, alpha, a, n, beta, c, n);
};
exports.dsyr2k = nclblast.dsyr2k;
exports.ssyr2k = nclblast.ssyr2k;
exports.zsyr2k = nclblast.zsyr2k;
exports.csyr2k = nclblast.csyr2k;
exports.syr2k = function (a, b, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nclblast[util_1.prefix(a) + "syr2k"](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);
};
exports.dtrmm = nclblast.dtrmm;
exports.strmm = nclblast.strmm;
exports.ztrmm = nclblast.ztrmm;
exports.ctrmm = nclblast.ctrmm;
exports.trmm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(a) + "trmm"](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
exports.dtrsm = nclblast.dtrsm;
exports.strsm = nclblast.strsm;
exports.ztrsm = nclblast.ztrsm;
exports.ctrsm = nclblast.ctrsm;
exports.trsm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nclblast[util_1.prefix(a) + "trsm"](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
