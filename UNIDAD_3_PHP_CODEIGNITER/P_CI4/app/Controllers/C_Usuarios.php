<?php
namespace App\Controllers;
use App\Models\ModeloUsuario;
use CodeIgniter\Controller;

class C_Usuarios extends Controller{
    public function index(){
        $modelo = new ModeloUsuario();
        $data['users'] = $modelo->getUsers();
        echo view('templates/header', $data);
        echo view('Usuarios/view', $data);
        echo view('templates/footer', $data);
    }

    //Ir a la vista de agregar usuario
    public function create(){
        echo view('templates/header');
        echo view('Usuarios/AgregarUsuario');
        echo view('templates/footer');
    }

    //guardar el usuario
    public function Almacenar(){
        $modelo = new ModeloUsuario();
        $data = [
            'name' => $this->request->getVar('nombre'),
            'email' => $this->request->getVar('correo')
        ];

        $modelo->insert($data);
        return redirect()->to(base_url('/usuarios'));
    }


    //actualizar usuario
    //cargar vista para editar
    public function vistaEditar($id = null){
        $modelo = new ModeloUsuario();
        $data['usu'] = $modelo->where('id', $id)->first();
        echo view('templates/header');
        echo view('Usuarios/EditarUsuario', $data);
        echo view('templates/footer');
    }

    //almacenar la actualizacion
    public function Editar(){
        $modelo = new ModeloUsuario();
        $id = $this->request->getVar('id');
        $data = [
            'name' => $this->request->getVar('nombre'),
            'email' => $this->request->getVar('correo')
        ];

        $modelo->update($id, $data);
        return redirect()->to(base_url('/usuarios'));
    }


    //borrar usuario
    public function Eliminar($i = null){
        $modelo = new ModeloUsuario();
        $data ['users'] = $modelo->where('id', $i)->delete($i);
        return redirect()->to(base_url('/usuarios')); 
    }
}