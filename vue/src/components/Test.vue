<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/components'
import { mdiAccount, mdiAccountCancel } from '@mdi/js'

// headers を黙らせるために、readonly Headerを定義
type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>> ? UnwrapReadonlyArrayType<I> : A
type DT = InstanceType<typeof VDataTable>;
type ReadonlyDataTableHeader = UnwrapReadonlyArrayType<DT['headers']>;

const headers: ReadonlyDataTableHeader[] = [
{
      title: 'Dessert (100g serving)',
      align: 'start',
      sortable: true,
      key: 'name',
    },
    { title: 'Calories', align: 'end', key: 'calories' },
    { title: 'Fat (g)', align: 'end', key: 'fat' },
    { title: 'Carbs (g)', align: 'end', key: 'carbs' },
    { title: 'Protein (g)', align: 'end', key: 'protein' },
    { title: 'Iron (%)', align: 'end', key: 'iron' },
  ]

  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0',
    },
  ];


</script>
<template>
	<v-container class="fill-height">
		<v-data-table :headers="headers" :items="desserts" class="elevation-1" item-value="name">
		</v-data-table>
    <v-icon :icon='mdiAccountCancel' />
					<v-icon :icon='mdiAccount' />
	</v-container>
</template>