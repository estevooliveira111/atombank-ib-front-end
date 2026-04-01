<template>
  <div>
    <h3 class="text-h1">Faça seu login</h3>
    <p class="text-body1 text-grey-8 q-mb-xl">Seja bem-vindo novamente ao seu internet banking.</p>

    <q-form class="q-gutter-md">
      <q-input outlined label="E-mail" placeholder="Digite seu e-mail" type="email" bg-color="white" />

      <q-input outlined label="Senha" placeholder="Digite sua senha" type="password" bg-color="white">
        <template v-slot:append>
          <q-btn flat round dense icon="visibility_off" />
        </template>
      </q-input>

      <div class="row items-center justify-between q-mt-sm">
        <q-checkbox label="Lembrar-me" color="primary" :model-value="true" />
        <q-btn flat label="Esqueceu a senha?" color="primary" no-caps to="/auth/forgot-password" />
      </div>

      <div class="q-mt-xl">
        <q-btn color="primary" unelevated label="Entrar" class="full-width q-py-md text-weight-bold" to="/" />
      </div>

      <div class="q-mt-lg text-center">
        <span class="text-body2 text-grey-7">Ainda não tem uma conta?</span>
        <q-btn flat label="Cadastre-se" color="primary" class="q-ml-xs text-weight-bold" no-caps to="/auth/register" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
// Sem lógica real, apenas interface
</script>
