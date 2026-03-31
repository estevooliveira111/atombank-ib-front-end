<template>
  <div>
    <h3 class="text-h1 q-mb-sm">Recupere sua senha</h3>
    <p class="text-body1 text-grey-8 q-mb-xl">Enviaremos um link de confirmação para o seu e-mail cadastrado.</p>

    <q-form class="q-gutter-md">
      <q-input
        outlined
        label="E-mail de Cadastro"
        placeholder="Digite seu e-mail"
        type="email"
        bg-color="white"
      />

      <div class="q-mt-xl">
        <q-btn
          color="primary"
          unelevated
          label="Enviar Link"
          class="full-width q-py-md text-weight-bold"
        />
      </div>

      <div class="q-mt-lg text-center">
        <q-btn
          flat
          icon="arrow_back"
          label="Voltar para o Login"
          color="primary"
          class="full-width text-weight-bold"
          no-caps
          to="/auth/login"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
// Sem lógica real
</script>
