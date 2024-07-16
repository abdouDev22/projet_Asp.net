(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const i=[{name:"John Doe",email:"john@example.com",phone:"123-456-7890",phone2:"123-456-7891",phone3:"123-456-7892"},{name:"Jane Smith",email:"jane@example.com",phone:"234-567-8901",phone2:"234-567-8902",phone3:"234-567-8903"},{name:"Michael Johnson",email:"michael@example.com",phone:"345-678-9012",phone2:"345-678-9013",phone3:"345-678-9014"},{name:"Emily Davis",email:"emily@example.com",phone:"456-789-0123",phone2:"456-789-0124",phone3:"456-789-0125"}],s=document.querySelector("#dataTable tbody"),d=document.getElementById("searchInput");function l(a){s.innerHTML="",a.forEach(e=>{const r=document.createElement("tr");r.innerHTML=`
      <td>${e.name}</td>
      <td>${e.email}</td>
      <td>${e.phone}</td>
      <td>${e.phone2}</td>
      <td>${e.phone3}</td>
      <td class="action-buttons">
        <button class="modify">Modifier</button>
        <button class="delete">Supprimer</button>
      </td>
    `,s.appendChild(r)})}function u(a){const e=a.target.value.toLowerCase(),r=i.filter(n=>n.name.toLowerCase().includes(e)||n.email.toLowerCase().includes(e)||n.phone.includes(e)||n.phone2.includes(e)||n.phone3.includes(e));l(r)}d.addEventListener("input",u);l(i);
