<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Clientes
                    <RouterLink to="/Clientes/create"class="btn btn-primary float-end">
                        Agregar
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Appellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>RFC</th>
                        <th>Curp</th>
                        <th>CP</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="(cliente, index) in Clientes" :key="index">
                            <td>{{ cliente.id }}</td>
                            <td>{{ cliente.nombre }}</td>
                            <td>{{ cliente.iapellido }}</td>
                            <td>{{ cliente.direccion }}</td>
                            <td>{{ cliente.telefono }}</td>
                            <td>{{ cliente.rfc }}</td>
                            <td>{{ cliente.curp }}</td>
                            <td>{{ cliente.cp }}</td>
                            <td>Editar &nbsp; Borrar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "ClientesView",
        data() {
            return {
                Clientes: []       
            }
        },
        mounted() { // Cuando se carga la pagina
            this.getClientes();
        },
        methods: {
            getClientes() {
                axios.get('http://localhost:3000/api/clientes2').then(res=>{
                    this.Clientes = res.data;
                });
            }
        }
    }
</script>