<?php 

namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ModeloUsuario;

class ApiUsuarios extends ResourceController{

    //metodo index para mostrar datos JSON
    public function index(){
        $modelo = new ModeloUsuario;
        $data['usu'] = $modelo->getUsers();
        return $this->respond($data);//responde (envia los datos) para que la api ya pueda ser consumida
    }

    //crear usuarios
    public function Insertar(){
        $modelo = new ModeloUsuario;
        $data = [
            'name' => $this->request->getVar('nombre'),
            'email' => $this->request->getVar('correo')
        ];
        $modelo->insert($data);

        $response = [
            'status' => 201, //para eliminar es el 200
            'error' => null,
            'messages' => [
                'succes' => 'Usuario creado correctamente'
            ]
        ];

        return $this->respondCreated($response);
    }


    //editar usuarios 
    public function Editar(){
        $modelo = new ModeloUsuario;
        $id = $this->request->getVar("codigo");
        $modelo->where('id', $id)->first();
        $data = [
            'name' => $this->request->getVar('nombre'),
            'email' => $this->request->getVar('correo'),
        ];

        $modelo->update($id, $data);

        $response = [
            'status' => 201, 
            'error' => null,
            'messages' => [
                'succes' => 'Usuario editado correctamente'
            ],
        ];

        return $this->respondCreated($response);
    }

    //eliminar usuarios
    public function Eliminar(){
        $modelo = new ModeloUsuario;
        $i = $this->request->getVar('codigo');
        $modelo->where('id', $i)->delete($i);

        $response = [
            'status' => 200, 
            'error' => null,
            'messages' => [
                'succes' => 'Usuario borrado correctamente'
            ],
        ];

        return $this->respondCreated($response);
    }
}
