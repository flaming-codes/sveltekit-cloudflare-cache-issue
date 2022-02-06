<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit/types";

    export const prerender = true;

    export const load : Load = async({fetch, params}) => {
       try {           
        const res = await fetch(`/posts/${params.slug}.json`, {
            credentials: "omit",
            headers: {
                "Cache-Control": "public, max-age=604800"
            }
        });       
        const json = await res.json();      

        return {
            status: 200,
            props: json,
        }
       } catch(error){
           console.error(error);

           return {
               status: 500,
               error
           }
       }
    }
</script>

<script lang="ts">
    export let message: string;
</script>

<h1>
    Post Detail Page
</h1>
<p>
    message: {message}
</p>
