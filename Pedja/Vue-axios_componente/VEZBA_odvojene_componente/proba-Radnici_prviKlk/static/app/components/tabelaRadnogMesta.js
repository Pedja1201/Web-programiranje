export default {
    props: ["radnaMesta"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{}
    },
    template: `
<table>
<thead>
    <tr>
        <th>ID</th>
        <th>Naziv</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="mesto in radnaMesta">
        <td>{{mesto.id}}</td>
        <td>{{mesto.naziv}}</td>
        <td><button v-on:click="$emit('uklanjanje', mesto.id)">Ukloni</button>
            <button v-on:click="$emit('izmena', {...mesto})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}
