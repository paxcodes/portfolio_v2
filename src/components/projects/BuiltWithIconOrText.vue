<template functional>
  <img
    v-if="props.builtWith.data.icon_type"
    :src="
      require(`@/assets/built_with/${props.builtWith.key}.${props.builtWith.data.icon_type}`)
    "
    :alt="props.builtWith.key"
    height="40"
  />
  <span v-else>{{ props.builtWith.key }}</span>
</template>