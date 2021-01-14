<?php namespace App\Controllers;

use App\Models\Modelo;
use CodeIgniter\Controller;

class C_Noticia extends Controller{
    
    public function index(){
        $model = new Modelo();//conecta a la base de datos
        $data['news'] = $model->getNews();
        
        echo view('templates/header', $data);
        echo view('Noticias/Noticias', $data);
        echo view('templates/footer', $data);
    }
    
    public function view($slug = null){//mostrar la noticia completa
        $model = new Modelo();
        $data['news'] = $model->getNews($slug);
        
        if (empty($data['news']))//si la noticia no existe arroja un mensaje
        {
            throw new \CodeIgniter\Exceptions\PageNotFoundException('No se encuentra la noticia: '. $slug);
        }
        
        $data['title'] = $data['news']['title'];
        
        echo view('templates/header', $data);
        echo view('Noticias/view', $data);
        echo view('templates/footer', $data);
        
    }
    
    //Metodo para crear una noticia
    public function create()
    {
        $model = new Modelo();
        
        if ($this->request->getMethod() === 'post' && $this->validate([ //valida que en el formulario  
            'title' => 'required|min_length[3]|max_length[255]',        //tenga un minimo y maximo de caracteres en
            'body'  => 'required'                                       //el titulo y que tenga un body
            ]))
            {
                $model->save([
                    'title' => $this->request->getPost('title'),
                    'slug'  => url_title($this->request->getPost('title'), '-', TRUE),//crea el slug correspondiente
                    'body'  => $this->request->getPost('body'),
                    ]);
                    
                    echo view('Noticias/succes');
                    
                }
                else
                {
                    echo view('templates/header', ['title' => 'Create a news item']);
                    echo view('Noticias/create');
                    echo view('templates/footer');
                }
            }
            
        }