import{J as i,_ as n,L as l,a5 as o,N as e,O as m}from"./index-DyoTrttr.js";import{s as a}from"./saibweb-CYKURFyV.js";import{C as c}from"./clock-lBVefJM5.js";function x(){const r=i();function s(){r("/login")}const t=n();return l.useEffect(()=>{t.clear(),o()},[]),e.jsxs("div",{className:"min-h-app flex items-center justify-center relative overflow-hidden p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",style:{backgroundImage:`url(${a})`,filter:"blur(26px)"}}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5"}),e.jsxs("div",{className:"relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-fade-in",children:[e.jsx("div",{className:"mb-6 flex justify-center",children:e.jsx("img",{src:a,alt:"SaibGeo Logo",className:"h-12 object-contain"})}),e.jsx("div",{className:"mb-8 flex justify-center",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"}),e.jsx("div",{className:"relative bg-primary/10 rounded-full p-6 animate-bounce-slow",children:e.jsx(c,{className:"w-16 h-16 text-primary",strokeWidth:1.5})})]})}),e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-4",children:"Sua sessão expirou"}),e.jsx("p",{className:"text-zinc-700 mb-8 text-lg leading-relaxed",children:"Por favor, faça login novamente para continuar"}),e.jsx(m,{onClick:s,className:"w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105",size:"lg",children:"Ir para o Login"})]}),e.jsx("style",{children:`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `})]})}export{x as default};
