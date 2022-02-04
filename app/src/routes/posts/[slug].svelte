<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit/types";

    export const load : Load = async({fetch, params}) => {
        const res = await fetch(`/posts/${params.slug}`);
        const json = await res.json();

        return {
            status: 200,
            props: json,
            maxage: 60 * 60 * 24
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
