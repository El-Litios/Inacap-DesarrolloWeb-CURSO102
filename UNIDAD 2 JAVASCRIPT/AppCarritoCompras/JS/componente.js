
/* Producto  BEGIN */
Vue.component('producto', {
    props: {
        producto: {
            type: Object,
            required: true
        },
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="producto row">
            <div class="producto-img col s4 offset-s2">
                <img :src="imagen" alt="">
            </div>
            
            <div class="producto-info col s6">
                <h3> {{ titulo }}</h3>
                <h5 v-if="stock === 1">Ultima Unidad!!</h5>
                <h5 v-else-if="stock > 1">Hay Stock: {{ stock }}</h5>
                <h5 v-else>Agotado</h5>
                <h5>Envio: {{ envio }}</h5>

                
                <ul>
                    <li v-for="detalle in producto.detalles">
                        {{detalle}}
                    </li>
                </ul>
                
                <div class="colorBox" v-for="(variante, index) in producto.variante" :key="variante.varianteID" @mouseover="actProducto(index)" :style="{background: variante.varianteColor}">
                    
                </div>
                
                <br>
                <div class="col s6">
                    <select class="browser-default">
                        <option value="" disabled selected>Selecciona la talla</option>
                        <option value="1" v-for="talla in producto.talla">{{ talla }}</option>
                    </select>
                </div>
                
                <div class="row">
                    <div class="col s12">
                        <br>
                        <button class="btn" v-on:click="anadirCarro" onclick="M.toast({html: 'Agregado'})" :disabled="!stock" :class="{ disabled: !stock }">
                            Agregar al carro
                        </button>
                    </div>
                    
                    <!-- <div class="col s12">
                        <button class="btn" v-on:click="Eliminar" onclick="M.toast({html: 'Eliminado'})">
                            Eliminar uno
                        </button>
                    </div> -->
                </div>
                
            

            </div>
        </div>
    
    `,
    data(){
        return{
            variableSeleccion: 0,
        }
    },

    methods: {
        anadirCarro(){
            this.$emit('add-cart', 
            this.producto.variante[this.variableSeleccion].varianteID, 
            this.producto.nombre, 
            this.producto.marca);
        },
        
        Eliminar(){
            if (this.carrito>0){
                this.carrito--
            }
        },
        
        actProducto(index){
            this.variableSeleccion = index;
        },
        
        actStock(){
            this.variableSeleccion = this.producto.variante.varianteStock
        }
    },

    computed: {
        titulo(){
            return this.producto.nombre + " de marca " + this.producto.marca 
        },
        
        imagen(){
            return this.producto.variante[this.variableSeleccion].varianteImg
        },
        
        stock(){
            return this.producto.variante[this.variableSeleccion].varianteStock;
        },
        
        envio(){
            if(this.premium){
                return "Gratis"
            }else{
                return "$1990"
            }
        }
    }

})
/* Producto Zapatilla END */


/* 
Vue.component('producto', {
    props: {
        
    },
    template: `
        <div class="producto row">
            <div class="producto-img col s4 offset-s2">
                <img :src="imagen" alt="">
            </div>
            
            <div class="producto-info col s6">
                <h3> {{ titulo }}</h3>
                <h5 v-if="stock > 0">Hay Stock {{ stock }}</h5>
                <h5 v-else>Agotado</h5>
                
                
                <ul>
                    <li>
                        <b>Material: </b>{{detalles[0]}}
                    </li>
                    <li>
                        <b>Cuerpos: </b>{{detalles[1]}}
                    </li>
                    <li>
                        <b>Tapiz: </b>{{detalles[2]}}
                    </li>
                    <li>
                        <b>Largo: </b>{{detalles[3]}} cm
                    </li>
                    <li>
                        <b>Ancho: </b>{{detalles[4]}} cm
                    </li>
                </ul>
                
                <div class="colorBox" v-for="(variante, index) in variante" :key="variante.varianteID" @mouseover="actProducto(index)" :style="{background: variante.varianteColor}">
                    
                </div>
                
                <br>
                <div class="col s6">
                    <select class="browser-default">
                        <option value="" disabled selected>Selecciona la talla</option>
                        <option value="1" v-for="talla in talla">{{ talla }}</option>
                    </select>
                </div>
                
                <div class="row">
                    <div class="col s12">
                        <br>
                        <button class="btn" v-on:click="anadirCarro" onclick="M.toast({html: 'Agregado'})" :disabled="!stock" :class="{ disabled: !stock }">
                            Agregar al carro
                        </button>
                    </div>
                    
                    <!-- <div class="col s12">
                        <button class="btn" v-on:click="Eliminar" onclick="M.toast({html: 'Eliminado'})">
                            Eliminar uno
                        </button>
                    </div> -->
                </div>
                
            

            </div>
        </div>
    
    `,
    data(){
        return{
            dato: "nuevo producto",
            producto: "Sofa",
            marca: "Propia de la tienda",
            variableSeleccion: 0,
            detalles: ["Madera", "3 cuerpos","Tela", "170", "72"],
            variante: [
                {
                    varianteID: 1,
                    varianteColor: "Brown",
                    varianteImg: "./IMG/Productos/Sofa/cafe.webp",
                    varianteStock: 4,
                },
                {
                    varianteID: 2,
                    varianteColor: "BlueViolet",
                    varianteImg: "./IMG/Productos/Sofa/morado.webp",
                    varianteStock: 0,
                }
            ],
            carrito: 0,
            talla: ["S","M","XL"],
            
        }
    },

    methods: {
        anadirCarro(){
            this.carrito++
            
        },
        
        Eliminar(){
            if (this.carrito>0){
                this.carrito--
            }
        },
        
        actProducto(index){
            this.variableSeleccion = index;
        },
        
        actStock(varianteStock){
            this.variableSeleccion = varianteStock
        }
    },

    computed: {
        titulo(){
            return this.producto + " de marca " + this.marca 
        },
        
        imagen(){
            return this.variante[this.variableSeleccion].varianteImg
        },
        
        stock(){
            return this.variante[this.variableSeleccion].varianteStock;
        }
    }

})

 */

