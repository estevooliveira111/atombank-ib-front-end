<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <!-- Welcome/Header Section -->
      <div class="col-12 q-mb-md">
        <h1 class="text-h1 q-mb-xs">Saldo e Extrato</h1>
        <p class="text-body1 text-grey-8">Visualize suas movimentações financeiras detalhadas.</p>
      </div>

      <!-- Coluna Principal (65%) -->
      <div class="col-12 col-md-8">
        <!-- Card Saldo -->
        <q-card class="q-pa-xl q-mb-lg">
          <div class="row items-center justify-between">
            <div>
              <div class="text-caption text-uppercase text-weight-bold q-mb-xs">Saldo disponível</div>
              <div class="row items-center gap-md">
                <div class="text-h2 text-primary">R$ 24.500,00</div>
                <q-btn flat round dense icon="visibility" color="primary" />
              </div>
              <div class="text-positive text-body2 q-mt-sm row items-center gap-xs">
                <q-icon name="trending_up" />
                Rendeu R$ 7,55 nos últimos 12 meses
              </div>
            </div>
          </div>
        </q-card>

        <!-- Action Row -->
        <div class="row q-col-gutter-md q-mb-xl">
          <div class="col-6">
            <q-btn
              unelevated
              color="primary"
              class="full-width q-py-lg text-weight-bold"
              icon="add_circle"
              label="Depositar"
              no-caps
            />
          </div>
          <div class="col-6">
            <q-btn
              outline
              color="primary"
              class="full-width q-py-lg text-weight-bold"
              icon="arrow_outward"
              label="Transferir"
              no-caps
            />
          </div>
        </div>

        <!-- Lista de Extrato -->
        <q-card>
          <div class="q-pa-md row items-center justify-between border-bottom">
            <div class="text-h3">Extrato</div>
            <q-btn flat color="primary" label="Ver tudo" no-caps class="text-weight-bold" />
          </div>

          <q-list separator>
            <q-item v-for="item in transactions" :key="item.id" class="q-py-md">
              <q-item-section avatar>
                <q-avatar color="grey-2" text-color="primary" icon="shopping_bag" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">{{ item.name }}</q-item-label>
                <q-item-label caption>{{ item.date }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="text-weight-bold" :class="item.type === 'income' ? 'text-positive' : 'text-dark'">
                  {{ item.value }}
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Coluna Analítica (35%) -->
      <div class="col-12 col-md-4">
        <div class="text-h3 q-mb-lg">Análise de Abril</div>

        <!-- Card Fluxo Financeiro -->
        <q-card class="p-md q-mb-lg">
          <div class="text-caption text-uppercase text-weight-bold q-mb-lg">Fluxo Financeiro</div>
          <apexchart height="160" type="bar" :options="barOptions" :series="barSeries" />
          <div class="row q-mt-lg justify-between">
            <div class="column">
              <span class="text-caption">Entradas (+)</span>
              <span class="text-positive text-weight-bold text-h3">R$ 1.250,00</span>
            </div>
            <div class="column items-end">
              <span class="text-caption">Saídas (-)</span>
              <span class="text-weight-bold text-h3 text-dark">R$ 1.050,00</span>
            </div>
          </div>
        </q-card>

        <!-- Card Categorias -->
        <q-card class="p-md">
          <div class="text-caption text-uppercase text-weight-bold q-mb-lg">Gastos por Categoria</div>
          <div class="flex flex-center relative-position" style="height: 200px">
            <apexchart height="220" type="donut" :options="donutOptions" :series="donutSeries" />
            <div class="absolute-center text-center">
              <div class="text-caption" style="line-height: 1">Total no mês</div>
              <div class="text-weight-bold text-h3">R$ 1.050</div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const transactions = [
  { id: 1, name: 'Supermercado Mensal', date: '31 Mar', value: '- R$ 450,20', type: 'expense' },
  { id: 2, name: 'Transferência Recebida', date: '30 Mar', value: '+ R$ 1.200,00', type: 'income' },
  { id: 3, name: 'Pagamento Internet', date: '29 Mar', value: '- R$ 120,00', type: 'expense' },
  { id: 4, name: 'Aluguel Loft', date: '28 Mar', value: '- R$ 2.500,00', type: 'expense' }
]

const barSeries = [{
  name: 'Fluxo',
  data: [1200, 950, 1050]
}]

const barOptions = {
  chart: { toolbar: { show: false }, fontFamily: 'Inter, sans-serif' },
  plotOptions: { bar: { columnWidth: '50%', borderRadius: 4, distributed: true } },
  colors: ['#E5E7EB', '#E5E7EB', '#2563EB'],
  dataLabels: { enabled: false },
  xaxis: { categories: ['Jan', 'Fev', 'Mar'], axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  grid: { show: false },
  legend: { show: false }
}

const donutSeries = [450, 600]
const donutOptions = {
  chart: { fontFamily: 'Inter, sans-serif' },
  labels: ['Alimentação', 'Moradia'],
  colors: ['#2563EB', '#10B981'],
  legend: { position: 'bottom' },
  dataLabels: { enabled: false },
  plotOptions: { pie: { donut: { size: '80%' } } },
  stroke: { width: 0 }
}
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid #E5E7EB;
}
</style>
