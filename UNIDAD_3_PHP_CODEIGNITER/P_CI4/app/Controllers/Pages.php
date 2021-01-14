<?php namespace App\Controllers;
use CodeIgniter\Controller;

class Pages extends Controller{
    
    public function index(){
        return view("Bienvenida");
    }

    public function view($page='/Bienvenida'){
        if (! is_file(APPPATH.'/Views'.$page.'.php')) {
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }

        $mensaje = "welcome stranger CI4";
        $data['mensaje'] = ucfirst($mensaje);

        echo view('templates/header', $data);
        echo view(''.$page, $data);
        echo view('templates/footer', $data);

    }

}


?>
