<template>
    <div>
        <div class="bg-light">          
            <div>
                <h2>{{ titulo }}</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Lista",
  props: ['titulo'],
};
</script>