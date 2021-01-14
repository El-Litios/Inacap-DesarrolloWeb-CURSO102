var app = new Vue({
    el: '#app',
    data: {
        carrito: [],
        premium: true,
        productos: [
            {
                nombre: 'Zapatilla', 
                marca: 'Nike',
                variante: [
                    {
                        varianteID: 1,
                        varianteColor: "Black",
                        varianteImg: "./IMG/Productos/Zapatillas/negro.webp",
                        varianteStock: 3,
                    },
                    {
                        varianteID: 2,
                        varianteColor: "Blue",
                        varianteImg: "./IMG/Productos/Zapatillas/azulOscuro.webp",
                        varianteStock: 1,
                    }
                ],
                detalles: ['Capellada: Mesh', 'Forro: Nylon', 'Suela: Goma'],
                talla: ["39","40","41"],
            },
            {
                nombre: 'Polera',
                marca: 'Alaniz',
                variante: [
                    {
                        varianteID: 3,
                        varianteColor: "Red",
                        varianteImg: "./IMG/Productos/Polera/rojo.webp",
                        varianteStock: 5,
                    },
                    {
                        varianteID: 4,
                        varianteColor: "Black",
                        varianteImg: "./IMG/Productos/Polera/negra.webp",
                        varianteStock: 8,
                    },
                    {
                        varianteID: 5,
                        varianteColor: "#bdbbb5",
                        varianteImg: "./IMG/Productos/Polera/verdeOlivo.webp",
                        varianteStock: 1,
                    }
                ],
                detalles: ['Material: Algodon', 'Tipo de Manga: Manga corta', 'Origen: Importado'],
                talla: ["L","XL","2XL"],
            },
            {
                nombre: 'Vestido',
                marca: 'Alaniz',
                variante: [
                    {
                        varianteID: 6,
                        varianteColor: "Black",
                        varianteImg: "./IMG/Productos/Vestidos/negro.jpg",
                        varianteStock: 9,
                    },
                    {
                        varianteID: 7,
                        varianteColor: "#77B5E5",
                        varianteImg: "./IMG/Productos/Vestidos/azul.webp",
                        varianteStock: 2,
                    },
                    {
                        varianteID: 8,
                        varianteColor: "#F0A68E",
                        varianteImg: "./IMG/Productos/Vestidos/coral.jpg",
                        varianteStock: 0,
                    },
                ],
                detalles: ['Material: Mezclilla', 'Tipo Botones: A la vista', 'Cierre: Amarras'],
                talla: ["XS","S","L"],
            } 
            
        ]
    },
    methods: {
        AddCart_root(codigo, nombre, marca){
            this.carrito.push(codigo, nombre, marca);
        }
    },
    computed: {
       
    },
})