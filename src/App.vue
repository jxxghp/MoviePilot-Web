<template>
  <div class="min-h-screen bg-[#060812] text-slate-100 relative selection:bg-violet-500/30 selection:text-violet-100">
    <!-- Sticky Glass Navigation -->
    <NavBar />

    <!-- Main Content -->
    <main>
      <!-- Hero & Unobstructed Interactive Product Showcase -->
      <HeroShowcase />

      <!-- 5-Step End-to-End Automation Pipeline -->
      <WorkflowPipeline />

      <!-- Core Capabilities Bento Grid -->
      <FeaturesBento />

      <!-- Built-in Multimodal AI Agent, Skills & Native MCP Server -->
      <AiAgentSection />

      <!-- Plugin Ecosystem & V3 Virtual Instances -->
      <PluginEcosystemSection />

      <!-- Categorized Ecosystem Integrations -->
      <IntegrationsMatrix />

      <!-- Interactive Multi-Method Deployment & Client Ecosystem -->
      <DeploymentSection />
    </main>

    <!-- Closing CTA & Multi-Repo Open-Source Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroShowcase from './components/HeroShowcase.vue'
import WorkflowPipeline from './components/WorkflowPipeline.vue'
import FeaturesBento from './components/FeaturesBento.vue'
import AiAgentSection from './components/AiAgentSection.vue'
import PluginEcosystemSection from './components/PluginEcosystemSection.vue'
import IntegrationsMatrix from './components/IntegrationsMatrix.vue'
import DeploymentSection from './components/DeploymentSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
