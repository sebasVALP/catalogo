import React, { useCallback } from 'react'
import { useCart } from './hooks/useCart'

const PRODUCTS_BY_CATEGORY = {
  Llaveros: [
    { id: 'llav-1', name: 'Turbo Tunning', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLjGOS2-LJxLdaNK197bVz_FeUNCiECdiVyip-ItMesZBYkJIDMgniGiZD6Bf7_yj2X6h73ejErv8am4S18u4Fzj1rOyBzDr6UtUBA-1e66iE3uHY3nJlwpoSV0elbLX81B6BT1kinE8YCz4YMuxdXS7BVAPBupiSwKuzY52ap5R5RiV0suJqdw8Zdlwcxd_gCC-zr--LyniEOCS4hiw7ft6fs5cxv6Q38IbLYQ8ZUs927wuBZMWFoKUo2dt10_c4ohB-UO8J4Fi_U' },
    { id: 'llav-2', name: 'Espiral Tunning', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAZy-x1v-QOSoPIfk0imJrQVQtFzost2TAUh6FpApOYKscQxMmDkApaWbx5xpD1CeWb2IdXkAN_i8r3ZhAc9DZKmuUBuW5HpJfMxwGVrNawyNnq8N-yhwg8tDdbn4ZyKLsoMQooOWX17T0m3Pv_KOdRMaOFyxR6p_FECGgn9lEeeTVejEfBMRdN8rrh6k03M1knPl1WN7s-8Fr9yYk4f0bZs4gapXVvYLQC1QhuX-tx9dTEGEq_fVGJBEd5TyeFKjXY5666igVUrUF' },
    { id: 'llav-3', name: 'F1 Hard Tire', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfuzxTqbQQOHz_cULBriWJL_7lG8H2Ldbdb6_9NldVPA4clLhch1lCbEud8tbbM7-L5kiuVk6cUw_Y0_0hja7FB8O849EZScK8630rGy1M3SLRvvf9khc6trUwjgQ1QH5-FeHmxEWFmKbtfuAvzVLtE-Zu-5vYIN5aJDk6A6TQ7zgYOA6534dKQ3yZdKkNNoiffTDvroLwakJGfaRWIKElOwDGiHbMQE2OmHmpMgqrPO-yMFtghtr1YCGpeZnlRGC_FEY2yz6CChA2' },
    { id: 'llav-4', name: 'Placa JDM', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_vuRoXiXeouuv4a7rNGqvn4if5u4stWwYWrM1R5hYHzWZT-1l4YNS9T_iX3ehA_CS9x8rOj2WBTNQ44JWoC7As0X5hbj55v3NI7Z2_OYQIbGNT1itlEsukThPudrV_sqVbGyOsaXnxts9G3aIuLAXMjZbqv9HboJyGfqr_XejfAGhmi7tMuymAFJyDmB_5b1pcx8aKaWO8vNZy5Ip4A8AhId-aEP4GRf5G72zV1TJWYvyg8ofTO6mjmpwFDCDLyI-yHpZQVqALSlt' },
  ],
  Pines: [
    { id: 'pin-1', name: 'Mario Party', price: 14000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZVeBuoc0q72wbbAr1uG2AaM3jffTU4uxMZ6g3yrEJ2NHfVokuQKoCa9IqE5KO1fG4mWEf9sHWSVdyY_qSBtaCNJteU1grfPSsbcXHjngflvKbvDsyCV-zcl1wH7tYYVPRzrDeU6zxModj6vGJrZO2WteogI37mI1d0FqTZ_vZoXrCxG3cMKgr2cWoKs5t4yplN_sY1K8ACQZlY9-Zw495klghXhiZCwmuvs8b6KeXbanvmoxR--7otL7EqSruNFi-NymVmZWPTG5q' },
    { id: 'pin-2', name: 'Batería de Paciencia', price: 12000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLdxZslRiyIvQRRoD7JJzBqvbEh_EPR9eRg43OyG6u_emiJrIZEfR1mD8XgVyVuz7ZaT6NNZllsAWktqp--FTS9RdNirKngJPdtL2iOGR2deZBQ6kwc9_x-_8mGiYkDFdOWliyYWPp6YXHwddRGqM8V6oay5Te7RoKboYcgES7SYhXQQkL1K7MgJsYOLBSFUD_jpHKyX5JQvz3Fab9rGp8DXNhutIRcB2GgKJkWPx7D8nVapoSzpQCEZ4vRJCI675FtRWvUaeX6pnv' },
    { id: 'pin-3', name: 'Ew People Cat', price: 12000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmlMQU1gPb6yPh1LCpDYfEnSEj5khD_zxf5vjMADib0AocVwsD64qroZ2HgeoEa0LRJS25PR7wG3lyM7eWaXJfICkSPYbCgOyS_ZM1PoCTT4m3juLGmgluSkuoa0hZk0lkApmWVNW4qBkPhfM98Gb3quvsvkR_q9P7C0WToiMNByfmq0qAktpHJVqDnUNOsc_dSeTYVd73_QackT7ZuzkY0hrBqTQQwKHLvwhN61XXMbpyGRV3TXMtKi6VQiYcfpAnxHbOYPcFLPL5' },
    { id: 'pin-4', name: 'Betty La Fea', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJcNyLO3UtnlXH_wzsSWLyZN-nviYiMLQ9tC7foDILF623OWHMobjUQwypn2asEulFhkXJ5faETvgvwcqYxu0FFy0g7fSGRxdgpJZmVvhDAPYpAOBROWo4ZClkxuq2QaZwT3BhpDuKOTvMCsihxlmGW1qIjinhYxQGCM1v2iBJtqN5tcNhNrcg6jr4yzBBo9qJp13MAE_JMQ_for4lP_nOxRQUrDkmayFFyt8a3crCIeZqJLTAkrt1kUQGTWUjNTmCygVn2gjd5iAj' },
  ],
  Gorras: [
    { id: 'gor-1', name: 'Tommy Black', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuKtTq-3RgZF5G1KJ7e9HFJWVtRP2-QuJN9KBPRzF8U53P1hXtF2TkCIJJ3i2Vzx08KIfivDV87tLixqXZC-54FdYE_OT97PQjRgUPFgswj9tSZkymIyzFdsHbD2OoB2ivvVGPbYupO4O0nyLwX0MV2Im-eZx4pvJI21LQ5HsmbjY9Zht7tG9BfQLl37GDWlOoCv-LP6kFRZju6gqSY490FF2f2ROGUeGStERdSFXD2mkM9BA6vc2LZ_fR9aNFWpr_Abg6j0U7xSOo' },
    { id: 'gor-2', name: 'New York', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApy1FL-0P4VFOUd2TEWeYYRfG7MLmOEFEOwH9wtjY1Ovey1iU1SQaWQRb3WguIzxZnkxsT3JxbaQNpV_mKbZl04176_3OLvnihab-o_ZYlXLIKCjz7G1b1F3LUjYBgaAPzoa2WnFaY-Dh029ooZ3qxBLSCWuO6HcbSB4MMgm2o_uoIDzgijETumBXDQ4cFklfLcoimsVEIlHVgFia_UOYbMTa1D3JSMsZ8hT-512mnSQclnr7Uq8N6gZxRKOWR_j0FrsKVDrmmQzY' },
    { id: 'gor-3', name: 'Tommy Hilfiger', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcd1hz4PW0DC_vt4ZDgAVUKultldiIYfzb8LwoEOYnz9BiHFgqpaZSpHfrVRg94vbgUFymG1jEBF5ghCsW5n1v9bPG1ptQYFtjTydbVRSvPKOLYuDdaaKdGaOaT3YLvUtLAInJhJbw3XodHZLvm_ZiTESMyQjdWqtF141jI1ZAmnqG-Si6VW2eIadw8ZF5_LaZM0btUPSuYuqFLDEXYA5Iq3Z_nIjpc_BaUvEsJPx7Go9RaApoSlvobQRV6CxkPcm1z71sbwRzkUbI' },
    { id: 'gor-4', name: 'Colombia', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD2Zql8-oDXi7n8XVe-ns46MMcLLTNbW9KePJhYBnmBnjihY-t5ujGfZH41R_Emie3nZuNfZWEYZVgf2xIbjNw5EM3feRKWyjfoHulIV6Z3Q2JaJEuNvT6xuKMyiN_xLJnHHseoBo6NCIjf1HzvleGD-GWsNJKBL0tGkv3sniu9Sq2pygNRVm1HswF2g_EaT1xbowuyFseQXdKr6oBPe5dx3XEH0vmYE65OUBDYgmCyIhAmInGVfNXnkqLjgED-rvFUPw6ITCXbu7O' },
  ],
  Medias: [
    { id: 'med-1', name: 'Gatos', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ArN8ccpObULS7bPQqcIiT1CRzaEx4J1iMZ7frdnkogAH3n2JYGYi8dN6XHfXwIlD7hvaMPkNKQZFBqdrxRMr3PB3h-EY74ELGj-7NdZuePaqr3mKC0rsGueGdEzvPzOPYjodcg5m2w9aRSDR7L9nOkplwVMs5cP18QpuB-KGbmLxPTZ9d5cll1SzRsu8D9racPAiy6eMER1ZY39hzm8zolFV3eJs0_Oj9WmqXAgD3L9GneF8l-BUMjEgsdLZ-Ay1jJtYFt8RQQ1g' },
    { id: 'med-2', name: 'Comida Rápida', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_Qc_D_Gm1e_kiYKG-V9HjwzH9sfRv0f-y0PXD9EVoXUBB8UxJ2wAlna9jJ0vaKa72JeysEszPSDUitIc-R7Hisxh99RvS9lQkyjST1V7z834jppNOepEXLhwLdOlKg1nnsUEmdwASlJrTnKIxC1CCRwv7A_eXcOjdhaz8Dt7Dqy5-QdE0uRcdnrkOunM68pW5gD0VxXsyS50tMpRBLu57e3YEg0BPnfRvgaiSCacksL81KwWhj666DTxoXKY3z0MMVLKB_tzVd-i1' },
    { id: 'med-3', name: 'Aguacate', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPOszW0Ojgbl0IRnK-iJGNOiqJZm71TFV1C6IGCBhPZ5FAotSG-CFmLRuFSzNQWh5erVMyvByNutuwldWcw5Er-ZoysmlUZnoTkfwyZjuj54CsXNIUqsx986yyvVYPYBssxXoVRLAEIzFzbzKKvTuokTlDI1Xwv5M-ZSmyeSRZBEIfN4ola9u-Igj76wPJ4BSNsWNMFXJ9DuxW38JEsKFAGOslvdx3SzURWOr68av3jG_a0WSUxRwBalSuAj7Fb_E1g8UCUzw83Dqn' },
    { id: 'med-4', name: 'Patos', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk-CGvXwTbAjHl2sttzkhsgb_O2i7E4lv7m_-An3h9yelhYjLK1wlR37F5OlAtgVxLm-kFMLujwnEm1yFnxr3G4tcXo1JYLy8jnuiHTdYmKm9cDOzzWWYKlEh3exOqsilKJ7L9FkEM6jIFcXFnJlniNRZW9dcauSLPCvVViCCBz_sFB0Q7fX0U-SKS06pe2X1yknTTCrtEPJI320dMDHo09p4BzYqLbPb5gfq_uP8SiaYafnVKCZ32IH6FrhI98CENk69cJgUgOL9S' },
  ],
}

const ALL_PRODUCTS = Object.values(PRODUCTS_BY_CATEGORY).flat()

const FEATURED_PRODUCTS = [
  { id: 'prod-1', name: 'EW PEOPLE CAT', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYsKWqQC5wFUNzMww0MTtD3PseazdWlUJ_4MiYzdZrhuAVQhWo0epzaz0QuxKktkQ17e2dxE9FEbubAupgtCTHxGyq6bd3G5HjJwU44ZmWtrTYJJEY9GRCxtRpbQ_jYzBK8yvouiforjv0ETAA4a3erkTqY3ftjv6pMjwpfMX5v6IbWDk0_yQvjDFb32hl7nuO-eHLXm3Buy7k73Lae2ckn3j9lQEIBSU5Dl801WXshFIdRjCqQ_7tPlp2ntKcd705gv_NWI2vfEZq', tag: 'Nuevo' },
  { id: 'prod-2', name: 'PLACA JDM', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB179CUtBL4e0ZB6FeMqsflKGnG2BGUDaTjbWXFq5XM4ls98HltRa8UKmO9CRjjGyCzedZJkGnkN5fxVnAep8IUYyjguvGIy_KWSHpzavhhgbgXL8UbPJtYIH6VBHg7IPlsxKPOZgwOgffpjoyIwgoDyvGcQh2IMWeBjnUYl472VixrqwqLzUFV8BSU2E2M69s_9CrGsY5JW0PVlKGl55ZhQ3B5k5tWWVSatsf-JErH4lxebvyaEDsUZUJVwiSrJ_nbUzCiRaARb1Hb', tag: 'Oferta' },
  { id: 'prod-3', name: 'TURBO TUNNING', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XENUcffnRPc6TEt56iRqeAGYqMVFZf50ihNjaFxzEK-W6CDq4QJQsAfVlI8TQb6qzBoXLslGh_HW6WvCZBopLeDOaOgCHReTx0fO9gGppxIuZPQmAMSqCm_TDRq8Qs8pm395Rp3bUE_3jo-scFOxecJMQUFCtqq6IY0y-vP8xxoKmF6ZdfuJ3SJu_ezl1MbHn6e0R60xalcQ5eztq3hULabcWEXXuY3ZDFOemPaXjqnscX3fw6UmTpQ7ZlgRdvGyxy6WRTQZk7fh' },
  { id: 'prod-4', name: 'TOMMY HILFIGER', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoHPFBNL95ljh54M9vPWGKPmg_okg9PtDeUOviPywJNS7HKvkFRnoKvSF6Zjn_qyvefR__5MQDVXbn32QSXy_kuDeIEuCnksdh7OVGWBXCkp4nWOJh4yqKbRHGWmOdBT8znjNlVmu6qUJL2YRqsJERomFKfdGrwoLuxYaLZwBd7su0no5w2Mwxjz6vysOxlV3d4OTxYhU4LIJm9FGkBCnUEGKVBdn2dbhqTUuZ-tXru2E6BG2dpSo1koiI2JJWajsAgjw2CrGFiQLm', tag: 'Nuevo' },
  { id: 'prod-5', name: 'MARIO PARTY', price: 14000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSsQB3JRRzfjtLJZGCTGfElHzkNVLuZ4xXhQMAjRb0Blo3UruCoEI34i7AxDLDjXB3s1rdRNA5G4WGfcYgp8J_k1gxwSTxB7mg3b_UW1-EvyZF3EKkhZDPpH4z2LcLcG5HMuS9s_zQgXiJYWqOsNrPP69g9Ai2StIYpIzAzXSyUX0TBTOz8YFCCgAq9jXWAIMKUjnz-cdDAvjtyPCAzE6OnC5g4-5HtWXSzRrDlYCBJWZB8TPkQmxtj0OAJyOgoWWiuBlICf4OdZsY' },
]
function Icon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>
}

function Navbar({ totalCount, onCartToggle, onNavigateHome, onNavigateCategories, currentPage }) {
  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-8">
          <button id="brand-logo" onClick={onNavigateHome} className="font-headline-lg text-headline-lg text-primary uppercase italic tracking-tighter bg-transparent border-none cursor-pointer">Storebass</button>
          <nav className="hidden md:flex gap-6">
          <button id="nav-home" onClick={onNavigateHome} className={`font-title-md text-title-md bg-transparent border-none cursor-pointer transition-colors duration-200 ${currentPage === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white font-medium hover:text-primary'}`}>HOME</button>
          <button id="nav-categories" onClick={onNavigateCategories} className={`font-title-md text-title-md bg-transparent border-none cursor-pointer transition-colors duration-200 ${currentPage === 'categories' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white font-medium hover:text-primary'}`}>CATEGORÍAS</button>
        </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block group">
            <input id="search-input" className="bg-elevated-gray border border-card-border text-white rounded px-4 py-2 w-64 focus:border-primary focus:outline-none focus:ring-0 transition-colors duration-200 peer font-body-base" placeholder="¿Qué deseas comprar?" type="text" />
            <Icon name="search" className="absolute right-3 top-2.5 text-[#c8c6c6] peer-focus:text-primary transition-colors duration-200" />
          </div>
          <button id="btn-cart-toggle" onClick={onCartToggle} className="hover:text-primary transition-colors duration-200 flex items-center bg-elevated-gray border border-card-border p-2 rounded hover:border-primary relative">
            <Icon name="shopping_cart" />
            {totalCount > 0 && (
              <span id="cart-badge" className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-background">{totalCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

function HeroSection({ onNavigateCategories }) {
  return (
    <section className="relative overflow-hidden topographic-bg bg-surface pt-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 min-h-[420px]">
        <div className="z-10 py-14 lg:py-20">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3 block">BIENVENIDO A STOREBASS</span>
          <h1 className="font-display-xl mb-5 leading-none text-white uppercase" style={{ fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1.0, letterSpacing: '0.01em' }}>
            COLECCIONA LO<br />
            QUE <span className="text-primary">TE REPRESENTA</span>
          </h1>
          <p className="text-white/80 mb-8 max-w-md font-body-base" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Pines, llaveros y gorras con estilo propio.<br />
            Más de 200 diseños disponibles.
          </p>
          <div className="flex flex-wrap gap-4">
            <button id="btn-hero-catalog" onClick={onNavigateCategories} className="bg-primary text-on-primary px-8 py-3.5 font-headline-lg text-xl uppercase hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 rounded">
              VER CATÁLOGO
              <Icon name="arrow_forward" className="text-xl" />
            </button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoGEdLwdIfU8C8r82eDfDK4gRyfVifaGNw_k1OokVS_mXb0jkstPOCmc-VMnBPJI5uhqDuEUM9mrlu6evPfO34SHOtTzifziAY_BndlWRrMfm1RzYQmt2wnOjE6IPm3fyev3_zCvaP6ni0CHT_n6j2yqtZGa5OL51v9r69Y_TNambRLL2M_jcIhz676LtCSEnUNqP10fT3n5ZZLXs96rbGWLjcQn4f2X-Aal8HQDmFDwdBw1l7Ct23HTI5ioTzbzAmITqOfRF4BC1" alt="Colección de pines exclusivos Storebass" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        </div>
        <div className="lg:hidden relative h-56 overflow-hidden rounded mt-4 mb-2">
          <img className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoGEdLwdIfU8C8r82eDfDK4gRyfVifaGNw_k1OokVS_mXb0jkstPOCmc-VMnBPJI5uhqDuEUM9mrlu6evPfO34SHOtTzifziAY_BndlWRrMfm1RzYQmt2wnOjE6IPm3fyev3_zCvaP6ni0CHT_n6j2yqtZGa5OL51v9r69Y_TNambRLL2M_jcIhz676LtCSEnUNqP10fT3n5ZZLXs96rbGWLjcQn4f2X-Aal8HQDmFDwdBw1l7Ct23HTI5ioTzbzAmITqOfRF4BC1" alt="Colección de pines exclusivos Storebass" />
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-10 grid grid-cols-2 md:grid-cols-4 gap-gutter text-center border-t border-outline-variant pt-8 relative z-10">
        {[
          { icon: 'local_shipping', label: 'Envíos a todo Colombia' },
          { icon: 'verified', label: 'Productos exclusivos' },
          { icon: 'lock', label: 'Pagos 100% seguros' },
          { icon: 'support_agent', label: 'Atención personalizada' },
        ].map((item) => (
          <div key={item.icon} className="flex flex-col items-center gap-2 group">
            <Icon name={item.icon} className="text-primary text-4xl group-hover:scale-110 transition-transform" />
            <span className="text-white font-title-md text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategoriesSection({ onNavigateCategories }) {
  const categories = [
    {
      id: 'category-card-pins',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ACkJ0L4YbPh_IH1-BHwH0G4o0uyxi-ivg6RKSOV6E5fIBe-v2Z-UKFL3RSZJuFsgKrDnPqweXtPnZdi-gFqUUcxwiwc_FxSpDR4JTLf5G6wrobEIYONrzxoHnB-Jj7tfN4kTnbnuKsKqPqkjmKrT2hdCKmKVcItF3vAdj8Xmkhc3E6gc3_xrP_3K7vFanTdmowVBd4ncIlAq8_fqIpypDCKTl8zkEwYeCD-WLB1Tj0MplA2XZQJsznrlZhf8fowXBk_TWmwUZP9p',
      tag: '+200 diseños',
      title: 'PINES',
      slug: 'Pines',
    },
    {
      id: 'category-card-keychains',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5HTo0AC4YVdngfg-hSkkuNCDrDpMBCbedePGwwD5qZN2mz8MAyGRizn9dB3OsJWe2oW5u8ZqGH7C9YENeP6GEyre8VUzlzIOjHSqyGPlp-OpifcUZ53AhhH0nEQSdQxqQQbgiOI3GVALVcK6QksYdKAQXCKZQPApVnLInQlNdsHRj_AR9lq1Ew50crn55HOBcvj4Zh_W9ZHc9SgwR2Q2a0-xBiZZGAhkqkRlHp-DCdVSx2be_jxsiDrntXMPgvXgMGmw9FVnESJYd',
      tag: '+50 diseños',
      title: 'LLAVEROS',
      slug: 'Llaveros',
    },
    {
      id: 'category-card-caps',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNHwQ-VabZ8Sb2byLzolfJP9PB8dVOttZQPqTB3xbSR94V-Q9cFrFqDoXyPeNZ2wNe88TzxsF9Tm7x9x2OF63VWIIRt9N5AHtck7290cPyHImVeAUHgNpAu_VVI8BabEXxA3gIhjpueB1PUqJTlhbYSD92nzBA2_MXMWWu83Nm82RXGtVBx2q7k3q6URVMLDaQQGCaXF3HqhjadGsfnXVtDu8scHA6wrDQ9zP3r7NtcUOK7DdO_i7gZYK1U9HKhlW-rd_AujJeG5vc',
      tag: 'Nuevos estilos',
      title: 'GORRAS',
      slug: 'Gorras',
    },
  ]

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg mb-12 uppercase border-l-4 border-primary pl-6 text-white">CATEGORÍAS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {categories.map((cat) => (
          <button key={cat.id} id={cat.id} onClick={() => onNavigateCategories(cat.slug)} className="group relative h-[400px] overflow-hidden rounded border border-card-border bg-elevated-gray text-left w-full cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.src} alt={cat.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
              <span className="bg-primary text-on-primary px-3 py-1 text-label-sm font-label-sm rounded-sm mb-2 w-fit">{cat.tag}</span>
              <div className="flex justify-between items-center">
                <h3 className="font-headline-lg text-3xl uppercase text-white">{cat.title}</h3>
                <Icon name="arrow_forward" className="border border-primary rounded-full p-2 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div id={product.id} className="relative bg-elevated-gray border border-card-border overflow-hidden group rounded h-80">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={product.img} alt={product.name} />
      {product.tag && (
        <span className={`absolute top-2 left-2 px-2 py-0.5 text-label-sm font-semibold rounded-sm z-10 ${product.tag === 'Oferta' ? 'bg-primary text-on-primary' : 'bg-white text-black'}`}>
          {product.tag}
        </span>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black/70 backdrop-blur-sm flex flex-col justify-center px-4 py-2 border-t border-card-border/30 z-10 transition-colors duration-300 group-hover:bg-black/80">
        <h3 className="font-title-md text-sm text-white uppercase mb-0.5 truncate">{product.name}</h3>
        <p className="font-headline-lg text-base text-primary">${product.price.toLocaleString('es-CO')}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="absolute bottom-2 right-2 w-9 h-9 bg-primary text-on-primary font-bold flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-sm hover:brightness-110 active:scale-95 z-20"
      >
        <Icon name="add" className="text-lg" />
      </button>
    </div>
  )
}

function FeaturedSection({ onAddToCart }) {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline-lg text-headline-lg uppercase border-l-4 border-primary pl-6 text-white">DESTACADOS</h2>
        <a className="text-primary hover:underline font-title-md uppercase tracking-tight" href="#">Ver todo</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

function CategoryProductGrid({ categoryName, products, onAddToCart }) {
  const sectionId = 'cat-' + categoryName.toLowerCase()
  return (
    <section id={sectionId} data-purpose="category-section" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 scroll-mt-28">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-headline-lg text-headline-lg uppercase border-l-4 border-primary pl-6 text-white">{categoryName}</h2>
        <a className="flex items-center space-x-2 font-bold hover:text-yellow-400 transition text-primary" href="#">
          <span>Ver más</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card bg-elevated-gray border border-card-border rounded-xl overflow-hidden shadow-xl" data-purpose="product-item">
            <img alt={product.name} className="w-full aspect-[4/5] object-cover" src={product.img} />
            <div className="p-4 flex justify-between items-end">
              <div>
                <h3 className="text-xs font-bold uppercase mb-1 text-white">{product.name}</h3>
                <p className="text-lg font-black text-primary">{'$' + product.price.toLocaleString('es-CO')}</p>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-primary text-on-primary p-2 rounded-lg hover:brightness-110 transition"
              >
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyBuySection() {
  const items = [
    { icon: 'local_shipping', title: 'Envíos a todo Colombia', desc: 'Entrega rápida y segura en todas las ciudades principales.' },
    { icon: 'verified', title: 'Productos exclusivos', desc: 'Diseños limitados que no encontrarás en ningún otro lugar.' },
    { icon: 'lock', title: 'Pagos 100% seguros', desc: 'Plataforma encriptada para proteger todas tus transacciones.' },
    { icon: 'support_agent', title: 'Atención personalizada', desc: 'Estamos para ayudarte en cada paso de tu compra.' },
  ]

  return (
    <section className="bg-surface-container-lowest py-24 topographic-bg border-t border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg mb-16 uppercase tracking-tight text-white">¿POR QUÉ COMPRAR EN STOREBASS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {items.map((item) => (
            <div key={item.icon} className="flex flex-col items-center gap-4">
              <div className="bg-surface-container-high border border-primary/30 p-6 rounded-lg">
                <Icon name={item.icon} className="text-primary text-5xl" />
              </div>
              <h4 className="font-title-md text-white">{item.title}</h4>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant topographic-bg relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto relative z-10">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-headline-lg text-headline-lg text-primary uppercase mb-6">Storebass</h3>
          <p className="text-white/70 text-sm mb-6">Elevando el estilo urbano desde 2024. Los mejores accesorios para quienes no temen destacar.</p>
          <div className="flex gap-4">
            <a id="footer-social-web" className="text-white hover:text-primary transition-all p-1" href="#"><Icon name="public" /></a>
            <a id="footer-social-share" className="text-white hover:text-primary transition-all p-1" href="#"><Icon name="share" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-title-md text-white uppercase mb-4">Colecciones</h4>
          <a id="footer-link-pins" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Pines</a>
          <a id="footer-link-keychains" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Llaveros</a>
          <a id="footer-link-caps" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Gorras</a>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-title-md text-white uppercase mb-4">Soporte</h4>
          <a id="footer-link-contact" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Contacto</a>
          <a id="footer-link-terms" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Términos y Condiciones</a>
          <a id="footer-link-faq" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Preguntas Frecuentes</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-title-md text-white uppercase mb-2">Contacto</h4>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="phone" className="text-primary" />
            <span className="text-sm">305 3572974</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="alternate_email" className="text-primary" />
            <span className="text-sm">@storebass_col</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="location_on" className="text-primary" />
            <span className="text-sm">Cra. 16 #10-56</span>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-white/70 text-sm relative z-10">
        <p>&copy; 2024 Storebass. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a id="footer-link-privacy" className="hover:text-primary transition-colors" href="#">Privacidad</a>
          <a id="footer-link-shipping" className="hover:text-primary transition-colors" href="#">Envíos</a>
        </div>
      </div>
    </footer>
  )
}

function CartDrawer({ cart, isOpen, setIsOpen, onRemove, onUpdateQuantity, onCheckout, formatPrice }) {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        id="cart-backdrop"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        id="cart-drawer"
        className={`fixed right-0 top-0 bottom-0 h-full w-full sm:w-[450px] z-50 bg-elevated-gray border-l border-modal-border flex flex-col transition-transform duration-300 ease-out shadow-[0_0_50px_rgba(0,0,0,0.8)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-card-border/50">
          <h2 className="font-headline-lg text-2xl uppercase tracking-wider text-white">Carrito de Compras</h2>
          <button id="btn-cart-close" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors flex items-center p-1 rounded hover:bg-surface-bright">
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <div id="cart-items-container" className="flex-1 overflow-y-auto p-6 space-y-4">
          {totalCount === 0 ? (
            <div id="cart-empty-message" className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <Icon name="shopping_bag" className="text-6xl text-secondary opacity-50" />
              <p className="font-title-md text-white uppercase">Tu carrito está vacío</p>
              <p className="text-white/60 text-sm max-w-xs">¡Agrega pines, llaveros o gorras para darle estilo a tu outfit!</p>
              <button id="btn-cart-empty-catalog" onClick={() => setIsOpen(false)} className="mt-4 bg-primary text-on-primary px-6 py-3 font-headline-lg text-lg uppercase rounded hover:brightness-110 transition-all">
                Ver Catálogo
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row flex items-center gap-4 bg-[#1f2022]/80 p-3 border border-card-border/30 rounded">
                <img src={item.img} className="w-16 h-16 object-cover rounded border border-card-border/40" alt={item.name} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-title-md text-sm text-white uppercase truncate">{item.name}</h4>
                  <p className="font-headline-lg text-primary text-sm">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 bg-surface-bright border border-card-border/50 text-white rounded flex items-center justify-center hover:text-primary transition-colors text-xs font-bold">-</button>
                    <span className="text-xs font-semibold text-white px-2 select-none">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 bg-surface-bright border border-card-border/50 text-white rounded flex items-center justify-center hover:text-primary transition-colors text-xs font-bold">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-white/60 hover:text-error transition-colors p-1" title="Eliminar">
                  <Icon name="delete" className="text-lg" />
                </button>
              </div>
            ))
          )}
        </div>

        {totalCount > 0 && (
          <div id="cart-footer" className="p-6 border-t border-card-border/50 bg-surface-container-low/50 space-y-4">
            <div className="flex justify-between items-center text-white font-title-md text-lg">
              <span>Total:</span>
              <span id="cart-total" className="text-primary font-headline-lg text-2xl">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-white/50">* Envíos a todo Colombia. El costo de envío se calcula al pagar.</p>
            <button id="btn-cart-checkout" onClick={onCheckout} className="w-full bg-primary text-on-primary py-4 font-headline-lg text-xl uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 rounded">
              Proceder al pago
              <Icon name="arrow_forward" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function InfographicSection() {
  const stats = [
    { value: '200+', label: 'Diseños exclusivos', icon: 'palette' },
    { value: '5.000+', label: 'Clientes satisfechos', icon: 'people' },
    { value: '24/7', label: 'Atención al cliente', icon: 'support_agent' },
    { value: '100%', label: 'Pagos seguros', icon: 'verified' },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div
        className="rounded-xl border border-card-border overflow-hidden"
        style={{ backgroundColor: '#121315' }}
      >
        <div className="p-8 md:p-12 text-center">
          <span
            className="inline-block px-4 py-1 text-sm font-bold uppercase tracking-widest mb-4 rounded"
            style={{ backgroundColor: '#D4D400', color: '#121315' }}
          >
            Storebass en cifras
          </span>
          <h2
            className="font-headline-lg text-3xl md:text-4xl uppercase mb-4"
            style={{ color: '#D4D400' }}
          >
            Nuestro impacto
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Más que una tienda, una comunidad que crece cada día.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.icon}
                className="flex flex-col items-center gap-3 p-6 rounded-lg"
                style={{ border: '1px solid #4C4C4C', backgroundColor: 'rgba(212, 212, 0, 0.05)' }}
              >
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ color: '#D4D400' }}
                >
                  {stat.icon}
                </span>
                <span
                  className="font-headline-lg text-3xl md:text-4xl"
                  style={{ color: '#D4D400' }}
                >
                  {stat.value}
                </span>
                <span className="text-white/80 text-sm font-title-md uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriesPage({ onAddToCart, scrollToCategory }) {
  const prevScroll = React.useRef(null)
  React.useEffect(() => {
    if (scrollToCategory && scrollToCategory !== prevScroll.current) {
      prevScroll.current = scrollToCategory
      setTimeout(() => {
        const el = document.getElementById('cat-' + scrollToCategory.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [scrollToCategory])
  return (
    <main>
      {Object.entries(PRODUCTS_BY_CATEGORY).map(([category, products]) => (
        <CategoryProductGrid
          key={category}
          categoryName={category}
          products={products}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  )
}

function CheckoutPage({ cart, formatPrice, onNavigateHome }) {
  const [selectedCity, setSelectedCity] = React.useState('Pereira')
  const [showCityDropdown, setShowCityDropdown] = React.useState(false)

  const colombianCities = [
    'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena',
    'Bucaramanga', 'Pereira', 'Manizales', 'Armenia', 'Cúcuta',
    'Ibagué', 'Villavicencio', 'Santa Marta', 'Neiva', 'Popayán',
  ]

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 8000 : 0
  const total = subtotal + shipping

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 py-10 w-full pt-24">
      <div className="mb-10">
        <h1 className="font-headline-lg text-5xl uppercase italic flex items-center gap-4 border-b-4 border-primary inline-block pb-2 text-white">
          Carrito de Compras
          <Icon name="shopping_cart" className="text-5xl text-primary" />
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-elevated-gray rounded-xl p-8 border border-card-border" data-purpose="personal-data">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="person" className="text-2xl text-primary" />
              <h2 className="font-headline-lg text-xl uppercase text-white">Datos Personales</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Nombre" type="text" />
              <input className="w-full rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Apellido" type="text" />
              <input className="w-full rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Correo electrónico" type="email" />
              <input className="w-full rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Celular" type="tel" />
            </div>
          </section>
          <section className="bg-elevated-gray rounded-xl p-8 border border-card-border" data-purpose="payment-methods">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="credit_card" className="text-2xl text-primary" />
              <h2 className="font-headline-lg text-xl uppercase text-white">Métodos de Pago</h2>
            </div>
            <p className="text-xs text-gray-400 mb-6">Selecciona tu método de pago de preferencia</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <button className="payment-option flex flex-col items-center justify-between p-4 rounded-lg border border-card-border bg-surface-container-low h-32 hover:border-primary transition-all">
                <Icon name="credit_card" className="text-3xl text-primary" />
                <span className="text-[10px] text-center text-white">Tarjeta débito o crédito</span>
              </button>
              <button className="payment-option flex flex-col items-center justify-between p-4 rounded-lg border border-card-border bg-surface-container-low h-32 hover:border-primary transition-all">
                <span className="text-lg font-bold text-primary">PSE</span>
                <span className="text-[10px] text-center text-white">Paga seguro con tu banco</span>
              </button>
              <button className="payment-option flex flex-col items-center justify-between p-4 rounded-lg border border-card-border bg-surface-container-low h-32 hover:border-primary transition-all">
                <span className="text-lg font-bold italic text-primary">PayPal</span>
                <span className="text-[10px] text-center text-white">Pago con PayPal</span>
              </button>
              <button className="payment-option flex flex-col items-center justify-between p-4 rounded-lg border border-card-border bg-surface-container-low h-32 hover:border-primary transition-all">
                <Icon name="payments" className="text-3xl text-primary" />
                <span className="text-[10px] text-center text-white">Efectivo</span>
              </button>
            </div>
            <div className="space-y-4">
              <input className="w-full rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Número de la tarjeta" type="text" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="EXP MM/AA" type="text" />
                <input className="rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="CVV" type="text" />
                <input className="rounded-lg bg-transparent border border-white py-3 px-4 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Titular de la tarjeta" type="text" />
              </div>
            </div>
            <div className="mt-6 bg-surface-container-low border border-primary/30 rounded-lg p-4 relative">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-xs text-white"><span className="text-primary font-bold">Envío a</span> {selectedCity}</p>
                  <p className="text-[10px] text-gray-400">Entrega estimada de 2 a 5 días</p>
                </div>
                <button onClick={() => setShowCityDropdown(!showCityDropdown)} className="text-primary font-bold text-sm">Cambiar</button>
              </div>
              {showCityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-elevated-gray border border-card-border rounded-lg shadow-xl z-20 max-h-48 overflow-y-auto">
                  {colombianCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => { setSelectedCity(city); setShowCityDropdown(false) }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container-high transition-colors ${city === selectedCity ? 'text-primary font-bold' : 'text-white'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <input checked type="checkbox" className="rounded bg-transparent border-gray-500 text-primary focus:ring-primary" />
              <label className="text-[10px] text-gray-400 uppercase">Aceptas las políticas de tratamiento de datos</label>
            </div>
          </section>
        </div>
        <div className="lg:col-span-5">
          <aside className="bg-elevated-gray rounded-xl p-8 border border-card-border sticky top-24" data-purpose="order-summary">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="receipt_long" className="text-2xl text-primary" />
              <h2 className="font-headline-lg text-3xl uppercase text-white">Resúmen del Pedido</h2>
            </div>
            <div className="space-y-6 mb-8 border-b border-card-border pb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-surface-container-low rounded-lg overflow-hidden border border-card-border p-2">
                    <img alt={item.name} className="w-full h-full object-contain" src={item.img} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline-lg text-xl uppercase leading-tight text-white">{item.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-white">{formatPrice(item.price)}</p>
                    <div className="bg-surface-container-low text-[10px] px-1.5 rounded inline-block text-gray-400">{item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center italic">
                <p className="text-lg text-white">SubTotal ({totalCount} producto{totalCount !== 1 ? 's' : ''})</p>
                <p className="font-bold text-xl text-white">{formatPrice(subtotal)}</p>
              </div>
              <div className="flex justify-between items-center italic">
                <p className="text-lg text-white">Envío</p>
                <p className="font-bold text-xl text-white">{shipping > 0 ? formatPrice(shipping) : 'Gratis'}</p>
              </div>
              <div className="flex justify-between items-center border-t border-card-border pt-4">
                <p className="text-xl italic text-white">Total a pagar</p>
                <p className="font-bold text-3xl text-primary">{formatPrice(total)}</p>
              </div>
            </div>
            <button className="w-full bg-transparent border-2 border-green-500 rounded-full py-4 px-6 flex items-center justify-between group hover:bg-green-500/10 transition-colors">
              <Icon name="lock" className="text-white" />
              <span className="font-headline-lg text-2xl uppercase tracking-widest text-white">Pagar {formatPrice(total)}</span>
              <Icon name="arrow_forward" className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </aside>
        </div>
      </div>
      <section className="mt-24 text-center">
        <h2 className="font-headline-lg text-4xl uppercase mb-12 text-white">¿Por qué comprar en Storebass?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'local_shipping', text: 'Envíos a\ntodo Colombia' },
            { icon: 'verified', text: 'Productos\nexclusivos' },
            { icon: 'lock', text: 'Pagos 100%\nseguros' },
            { icon: 'support_agent', text: 'Atención\npersonalizada' },
          ].map((item) => (
            <div key={item.icon} className="flex flex-col items-center">
              <div className="mb-4 text-primary">
                <Icon name={item.icon} className="text-5xl" />
              </div>
              <p className="font-headline-lg text-xl uppercase leading-tight text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function HomePage({ onAddToCart, onNavigateCategories }) {
  return (
    <main>
      <HeroSection onNavigateCategories={onNavigateCategories} />
      <CategoriesSection onNavigateCategories={onNavigateCategories} />
      <div id="featured-section">
        <FeaturedSection onAddToCart={onAddToCart} />
      </div>
      <InfographicSection />
      <WhyBuySection />
    </main>
  )
}

export default function App() {
  const { cart, isOpen, setIsOpen, totalCount, addToCart, removeFromCart, updateQuantity, formatPrice } = useCart()
  const [page, setPage] = React.useState('home')
  const [scrollToCategory, setScrollToCategory] = React.useState(null)

  const navigateCheckout = useCallback(() => { setIsOpen(false); setPage('checkout') }, [])
  const navigateHome = useCallback(() => { setPage('home'); setScrollToCategory(null) }, [])
  const navigateCategories = useCallback((slug) => { setPage('categories'); setScrollToCategory(slug || null) }, [])

  return (
    <div className="bg-background text-white font-body-base antialiased min-h-screen">
      <Navbar totalCount={totalCount} onCartToggle={() => setIsOpen(true)} onNavigateHome={navigateHome} onNavigateCategories={navigateCategories} currentPage={page} />

      {page === 'home' ? (
        <HomePage onAddToCart={addToCart} onNavigateCategories={navigateCategories} />
      ) : page === 'categories' ? (
        <CategoriesPage onAddToCart={addToCart} scrollToCategory={scrollToCategory} />
      ) : (
        <CheckoutPage cart={cart} formatPrice={formatPrice} onNavigateHome={navigateHome} />
      )}

      <FooterSection />

      <CartDrawer
        cart={cart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={navigateCheckout}
        formatPrice={formatPrice}
      />
    </div>
  )
}
