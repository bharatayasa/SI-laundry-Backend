'use stric'
const express = require('express');
const router = express.Router();
const AccessToken = require('../middleware/auth');

const register = require('../controller/register'); 
router.post('/register', register.register);
router.put('/change/password', register.changePassword);

const login = require('../controller/login'); 
router.post('/login', login.login);

const transaction = require('../controller/transaksi');
router.get('/transaksi', AccessToken, transaction.getAllTransaksi);
router.get('/transaksi/:id', AccessToken, transaction.getTransaksiById);
router.post('/transaksi', AccessToken, transaction.addTransaksi);
router.put('/transaksi/:id', AccessToken, transaction.updateTransaksi);
router.delete('/transaksi/:id', AccessToken, transaction.deleteTransaksi); 
router.get('/transaksi/pdf/:id', AccessToken, transaction.generateTransaksiPDF);

const harga = require('../controller/harga');
router.get('/harga', AccessToken, harga.getAllHarga);
router.put('/harga/:id', AccessToken, harga.editHarga);

const pakaian = require('../controller/pakaian');
router.get('/pakaian', AccessToken, pakaian.getAllPakaian);
router.get('/pakaian/:id', AccessToken, pakaian.getPakaianById);
router.post('/pakaian', AccessToken, pakaian.addPakaian);
router.put('/pakaian/:id', AccessToken, pakaian.updatePakaian);
router.delete('/pakaian/:id', AccessToken, pakaian.deletePakaian);

const pelanggan = require('../controller/pelanggan');
router.get('/pelanggan', AccessToken, pelanggan.getAllPelanggan);
router.get('/pelanggan/:id', AccessToken, pelanggan.getPelangganById);
router.post('/pelanggan', AccessToken, pelanggan.inputPelanggan);
router.put('/pelanggan/:id', AccessToken, pelanggan.updatePelanggan);
router.delete('/pelanggan/:id', AccessToken, pelanggan.deletePelanggan);

const dashboard = require('../controller/dashboard');
router.get('/total/pelanggan', AccessToken, dashboard.getTotalPelanggan);
router.get('/total/pakaian', AccessToken, dashboard.getTotalPakaian);
router.get('/total/transaksi',AccessToken, dashboard.getTotalTransaksi);
router.get('/sum/transaksi', AccessToken, dashboard.getTotalHargaTransaksi);
router.get('/sum/transaksi/bulan', AccessToken, dashboard.getTotalHargaTransaksiBulanIni);
router.get('/status/count', AccessToken, dashboard.getStatusCount);
router.get('/sum/transaksi/hari', AccessToken, dashboard.getSumTransaksiHariIni);
router.get('/sum/setiap/bulan', AccessToken, dashboard.getSumTransaksiPerBulan);

module.exports = router;
