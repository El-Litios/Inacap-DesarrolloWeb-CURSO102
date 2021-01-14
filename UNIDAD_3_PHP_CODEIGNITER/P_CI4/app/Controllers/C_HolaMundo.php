<?php namespace App\Controllers;

use CodeIgniter\Controller;

class C_HolaMundo extends Controller
{
    public function index(){
        $data = [
            'nombre' => 'Ventana index',
            'title' => 'Metodo index'
        ];

        echo view("templates/header.php", $data);
        echo view("HolaMundo/hola.php", $data);
        echo view("templates/footer.php", $data);
        
    }
    
    public function view($page = 'hola'){
        if ( ! is_file(APPPATH.'/Views/HolaMundo/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }
        
        /* $data['title'] = ucfirst($page); */ // Capitalize the first letter
        
        $data = [
            'nombre' => 'Carlos',
            'title' => 'Programacion WEB'
        ];
        
        echo view('templates/header', $data);
        echo view('HolaMundo/'.$page, $data);
        echo view('templates/footer', $data);
    }
    
    /*  public function demo(){
        echo view("templates/header.php");
        echo ("Hola");
        echo view("templates/footer.php");
    } */
}
