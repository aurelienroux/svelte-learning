<script lang="ts">
	export let data;
</script>

<h2>{data.postData?.title}</h2>
<p>{@html data.postData?.content}</p>
