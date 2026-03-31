<template>
  <div>
    <h3 class="text-h1 q-mb-sm">Crie sua conta</h3>
    <p class="text-body1 text-grey-8 q-mb-xl">Falta pouco para você ter o melhor banco digital.</p>

    <q-form class="q-gutter-md">
      <q-input
        outlined
        label="Nome completo"
        placeholder="Digite seu nome completo"
        bg-color="white"
      />

      <q-input
        outlined
        label="E-mail"
        placeholder="Ex: joao@gmail.com"
        type="email"
        bg-color="white"
      />

      <q-input
        outlined
        label="CPF"
        placeholder="000.000.000-00"
        mask="###.###.###-##"
        bg-color="white"
      />

      <q-input
        outlined
        label="Crie uma senha"
        placeholder="Escolha uma senha forte"
        type="password"
        bg-color="white"
      />

      <div class="row q-mt-md">
        <q-checkbox color="primary" label="Concordo com os Termos e Políticas" />
      </div>

      <div class="q-mt-xl">
        <q-btn
          color="primary"
          unelevated
          label="Criar Conta"
          class="full-width q-py-md text-weight-bold"
          to="/"
        />
      </div>

      <div class="q-mt-lg text-center">
        <span class="text-body2 text-grey-7">Já tem uma conta?</span>
        <q-btn
          flat
          label="Fazer Login"
          color="primary"
          class="q-ml-xs text-weight-bold"
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
