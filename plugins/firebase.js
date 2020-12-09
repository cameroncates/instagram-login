import Vue from 'vue'
import {  db} from '@/services/firebase'

Vue.mixin({
    methods:{
        async firebase_push_db({ref, obj }, callback) {
            db.ref(ref).push(obj)
            .then((snapshot) => {
                console.log(snapshot, 'snapshot')
                callback(snapshot)
            })
            .catch(err => console.log(err))
        },
        async firebase_put_db({ref, child, obj }, callback) {
            db.ref(ref).child(child)
            .set(obj)
            .then((snapshot) => {
                console.log(snapshot, 'snapshot')
                callback(snapshot)
            })
        },
    }
})
