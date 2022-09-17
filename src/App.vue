<script setup lang="ts">
import PHeading from './components/placeholders/PHeading.vue'
import PDiv from './components/placeholders/PDiv.vue'
import PInput from './components/placeholders/PInput.vue'
import PButton from './components/placeholders/PButton.vue'
import SvgIcon from './components/base/SvgIcon.vue'

const parameters = ['JA', 'NEJ']
const events = ['Kund loggar in', 'Kund loggar ut', 'Kund hämtar sidan på nytt']
</script>

<template>
  <div class="flex h-screen w-screen flex-col py-12 px-16">
    <PHeading>Inquire</PHeading>
    <PDiv class="flex flex-col">
      <PHeading :level="2" class="mb-2">Komponenter (omständigheter)</PHeading>
      <div class="flex gap-4">
        <PDiv :width="'w-96'" class="flex flex-col gap-4">
          <PHeading :level="3">Parametrar</PHeading>
          <PDiv class="flex flex-col gap-4">
            <PInput label="Namn" placeholder="''Inloggad''" />
            <PInput
              :label="`Alternativ (${parameters.length})`"
              placeholder="''JA'' / ''NEJ'''"
              icon="plus"
            />
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(parameterName, i) of parameters"
                :key="i"
                class="flex w-fit items-center gap-2 bg-gray-300 p-2 font-medium leading-none text-gray-700 shadow-md"
              >
                <p>{{ parameterName }}</p>
                <div class="h-5 w-5 hover:bg-gray-100">
                  <SvgIcon icon="plus" class="h-5 w-5 rotate-45" />
                </div>
              </div>
            </div>
          </PDiv>
          <PButton class="w-full" text-color="white" bg-color="amber" icon="plus" />
        </PDiv>
        <PDiv :width="'w-96'" class="flex flex-col gap-4">
          <PHeading :level="3">Händelser</PHeading>
          <PInput
            :label="`Alternativ (${events.length})`"
            placeholder="''En kund loggar in''"
            icon="plus"
          />
          <div class="flex flex-wrap gap-2">
            <div
              v-for="(eventName, i) of events"
              :key="i"
              class="flex w-fit items-center gap-2 bg-gray-300 p-2 font-medium leading-none text-gray-700 shadow-md"
            >
              <p>{{ eventName }}</p>
              <div class="h-5 w-5 hover:bg-gray-100">
                <SvgIcon icon="plus" class="h-5 w-5 rotate-45" />
              </div>
            </div>
          </div>
        </PDiv>
        <!-- <PDiv :width="'w-96'" class="flex flex-col gap-4">
          <PHeading :level="3">Resultat</PHeading>
          <PInput
            :label="`Alternativ (${alternatives.length})`"
            placeholder="''Kund omdirigeras till profil''"
            icon="plus"
          />
          <div
            v-for="(alternativeName, i) of alternatives"
            :key="i"
            class="flex w-fit items-center gap-2 bg-gray-300 p-2 
            font-medium leading-none text-gray-700 shadow-md"
          >
            <p>{{ alternativeName }}</p>
            <div class="h-5 w-5 hover:bg-gray-100">
              <SvgIcon icon="plus" class="h-5 w-5 rotate-45" />
            </div>
          </div>
        </PDiv> -->
      </div>
      <PHeading :level="2" class="mb-2 mt-4">Scenarion</PHeading>
    </PDiv>
  </div>
</template>
