<?php namespace App\Models;

use CodeIgniter\Model;

class ModeloUsuario extends Model{

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'email'];

    public function getUsers(){
        return $this->findAll();
        echo view('templates/header', $data);
        echo view('templates/footer', $data);
    }
}