(self.webpackChunkcalendar=self.webpackChunkcalendar||[]).push([["holiday-subscription-picker"],{55889:(a,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>r});var s=n(87537),t=n.n(s),e=n(23645),o=n.n(e)()(t());o.push([a.id,".holiday-subscription-picker[data-v-7c272a24]{padding:20px}.holiday-subscription-picker__attribution[data-v-7c272a24]{color:var(--color-text-maxcontrast)}.holiday-subscription-picker__region[data-v-7c272a24]{display:flex;margin-top:20px;align-items:center}.holiday-subscription-picker__region__name[data-v-7c272a24]{flex-grow:1}.holiday-subscription-picker__region__name h3[data-v-7c272a24]{font-weight:bold;margin-bottom:initial}.holiday-subscription-picker__region__name__subline[data-v-7c272a24]{color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./src/components/Subscription/HolidaySubscriptionPicker.vue"],names:[],mappings:"AACA,8CACC,YAAA,CAEA,2DACC,mCAAA,CAGD,sDACC,YAAA,CACA,eAAA,CACA,kBAAA,CAEA,4DACC,WAAA,CAEA,+DACC,gBAAA,CACA,qBAAA,CAED,qEACC,mCAAA",sourcesContent:["\n.holiday-subscription-picker {\n\tpadding: 20px;\n\n\t&__attribution {\n\t\tcolor: var(--color-text-maxcontrast)\n\t}\n\n\t&__region {\n\t\tdisplay: flex;\n\t\tmargin-top: 20px;\n\t\talign-items: center;\n\n\t\t&__name {\n\t\t\tflex-grow: 1;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tmargin-bottom: initial;\n\t\t\t}\n\t\t\t&__subline {\n\t\t\t\tcolor: var(--color-text-maxcontrast)\n\t\t\t}\n\t\t}\n\t\t&__subscribe {\n\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const r=o},56491:(a,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>d});var s=n(15961),e=n(64024),o=n(20629),r=n(2323);const c=JSON.parse('[{"country":"Algeria","filename":"AlgeriaHolidays.ics","datespan":"2007-2020","authors":"Imad Tbahriti"},{"country":"Australia","filename":"AustraliaHolidays.ics","datespan":"2021-2022","authors":"RGreyman"},{"country":"Austria","filename":"AustrianHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Belgium","filename":"BelgianHolidays.ics","datespan":"2011-2022","authors":"Hubertus Verdonck"},{"country":"Bolivia","filename":"BoliviaHolidays.ics","datespan":"2010-2020","authors":"Rebelde Boliche"},{"country":"Brazil","filename":"BrazilHolidays.ics","datespan":"2009-2020","authors":"Henrique Faria"},{"country":"Bulgaria","filename":"BulgarianHolidays.ics","datespan":"2009 and beyond","authors":"Georgi D. Sotirov"},{"country":"Canada","filename":"CanadaHolidays.ics","datespan":"2012-2020","authors":"Sigurd Schmidt"},{"country":"Colombia","filename":"ColombianHolidays.ics","datespan":"2020-2050","authors":"Mauricio Sanchez"},{"country":"Costa Rica","filename":"CostaRicaHolidays.ics","datespan":"2012-2020","authors":"Gerardo Tovar"},{"country":"Croatia","filename":"CroatiaHolidays.ics","datespan":"2009-2017","authors":"Domagoj Debic"},{"country":"Czech","filename":"CzechHolidays.ics","datespan":"2007-2020","authors":"Martin Matula, Matěj Cepl, Peter Habcak"},{"country":"Finland (Finnish)","filename":"FinlandHolidays.ics","datespan":"2007-2024","authors":"Magnus Melin"},{"country":"Finland (Swedish)","filename":"FinlandHolidaysSwedish.ics","datespan":"2007-2024","authors":"Magnus Melin"},{"country":"Flanders","filename":"FlandersHolidays.ics","datespan":"2011-2021","authors":"Hubertus Verdonck"},{"country":"France","filename":"FrenchHolidays.ics","datespan":"2010-2030","authors":"danfra"},{"country":"Germany","filename":"GermanHolidays.ics","datespan":"2010-2025","authors":"Hagen Halbach"},{"country":"Greece","filename":"GreeceHolidays.ics","datespan":"2015-2020","authors":"Hans Kleiner"},{"country":"Haiti","filename":"HaitiHolidays.ics","authors":" Sheila Laplanche"},{"country":"Hungary","filename":"HungarianHolidays.ics","datespan":"2015-2060","authors":"spiraldancing, tozo"},{"country":"Iceland","filename":"IcelandHolidays.ics","datespan":"2021-2060","authors":"Kristjan Bjarni Gudmundsson"},{"country":"Ireland","filename":"IrelandHolidays2014-2021.ics","datespan":"2014-2021","authors":"Tom Condon"},{"country":"Italy","filename":"ItalianHolidays.ics","datespan":"2000-2030","authors":"Gianni Luppi/Gianfranco Balza"},{"country":"Japan","filename":"JapanHolidays.ics","datespan":"2007-2022","authors":"Atsushi Sakai"},{"country":"Kazakhstan (English)","filename":"KazakhstanHolidaysEnglish.ics","datespan":"2015-present","authors":"Yuriy Gural"},{"country":"Kazakhstan (Russian)","filename":"KazakhstanHolidaysRussian.ics","datespan":"2015-present","authors":"Yuriy Gural"},{"country":"Liechtenstein","filename":"LiechtensteinHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Lithuania","filename":"LithuanianHolidays.ics","datespan":"2020-2025","authors":"joshas"},{"country":"Morocco","filename":"MoroccoHolidays.ics","authors":"Tarik El Maniani"},{"country":"Netherlands","filename":"DutchHolidays.ics","datespan":"2010-2050","authors":"Pander, RobJE"},{"country":"Netherlands (English)","filename":"DutchHolidaysEnglish.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Netherlands (German)","filename":"DutchHolidaysGerman.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Netherlands (French)","filename":"DutchHolidaysFrench.ics","datespan":"2010-2050","authors":"Pander"},{"country":"Nicaragua","filename":"NicaraguaHolidays.ics","datespan":"2015-2020","authors":"phurtado1112"},{"country":"Norway","filename":"NorwegianHolidays.ics","datespan":"2009-2020","authors":"Håvard Wigtil"},{"country":"Pakistan","filename":"PakistanHolidays.ics","datespan":"2007-2020","authors":"Umar Toseef"},{"country":"Poland","filename":"PolishHolidays.ics","datespan":"2015-2030","authors":"Artur Majcherczak"},{"country":"Portugal","filename":"PortugalHolidays.ics","datespan":"2001-2030","authors":"Nuno Rua"},{"country":"Russia","filename":"RussiaHolidays.ics","datespan":"2010-2020","authors":"Alexander L. Slovesnik"},{"country":"Singapore","filename":"SingaporePublicHolidays-2021.ics","datespan":"2021","authors":"Singapore Ministry of Manpower"},{"country":"Singapore","filename":"SingaporePublicHolidays-2022.ics","datespan":"2022","authors":"Singapore Ministry of Manpower"},{"country":"Slovenia","filename":"SlovenianHolidays.ics","datespan":"2012-2022","authors":"Klemen Robnik, Peter Klofutar"},{"country":"Slovakia","filename":"SlovakHolidays.ics","datespan":"2009-2025","authors":"Branislav Rozbora"},{"country":"South Africa","filename":"SouthAfricaHolidays.ics","datespan":"2013-2021","authors":"Malcolm McLean"},{"country":"South Korea","filename":"SouthKoreaHolidays.ics","datespan":"2000-2020","authors":"Marcus Yoo"},{"country":"Spain","filename":"SpainHolidays.ics","datespan":"2021","authors":"forolinux"},{"country":"Sweden","filename":"SwedishHolidays.ics","datespan":"2020-2029","authors":"Erik Lundin"},{"country":"Switzerland","filename":"SwissHolidays.ics","datespan":"2010-2025","authors":"boe"},{"country":"Trinidad and Tobago","filename":"TrinidadTobagoHolidays.ics","datespan":"2015-2025","authors":"Joe"},{"country":"UK [All]","filename":"UKHolidays.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [England & Wales]","filename":"UKHolidays-EnglandWales.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [Northern Ireland]","filename":"UKHolidays-NIreland.ics","datespan":"2021-2030","authors":"KR304"},{"country":"UK [Scotland]","filename":"UKHolidays-Scotland.ics","datespan":"2021-2030","authors":"KR304"},{"country":"Ukraine","filename":"UkraineHolidays.ics","datespan":"2014-2020","authors":"Kostya Nesterenko"},{"country":"Uruguay","filename":"UruguayHolidays.ics","datespan":"2011-2021","authors":"Gonzalo Alvarez"},{"country":"USA","filename":"USHolidays.ics","datespan":"2020-2030","authors":"Thomas Kelley"}]');var l=n(62768);const u={name:"HolidaySubscriptionPicker",components:{NcButton:s.P2,NcModal:s.Jc},data(){const a=c.map((a=>({...a,source:"https://www.thunderbird.net/media/caldata/"+a.filename}))),i={},n={};return a.forEach((a=>{i[a.source]=!1,n[a.source]=!1})),{calendars:a,loading:!0,subscribed:n,subscribing:i,subscriptions:[]}},computed:{...(0,o.Se)(["sortedCalendars"])},async mounted(){this.subscriptions=await(0,r.sz)(),this.subscriptions.map((a=>this.subscribed[a.source]=!0)),this.loading=!1},methods:{async subscribe(a){try{this.subscribing[a.source]=!0,await this.$store.dispatch("appendSubscription",{displayName:t("calendar","Holidays in {region}",{region:a.country}),color:(0,l.ny)(a.source),source:a.source}),this.subscribed[a.source]=!0}catch(a){console.error("Could not add holiday subscription",a),(0,e.x2)(this.$t("calendar","An error occurred, unable to create the public holiday calendar."))}finally{this.subscribing[a.source]=!1}}}};n(56931);const d=(0,n(51900).Z)(u,(function(){var a=this,i=a._self._c;return i("NcModal",{on:{close:function(i){return a.$emit("close",i)}}},[i("div",{staticClass:"holiday-subscription-picker"},[i("h2",[a._v(a._s(a.t("calendar","Public holiday calendars")))]),a._v(" "),i("p",{staticClass:"holiday-subscription-picker__attribution"},[a._v("\n\t\t\t"+a._s(a.t("calendar","Public holiday calendars are provided by Thunderbird. Calendar data will be downloaded from {website}",{website:"thunderbird.net"}))+"\n\t\t")]),a._v(" "),a._l(a.calendars,(function(n){return i("div",{key:n.source,staticClass:"holiday-subscription-picker__region"},[i("div",{staticClass:"holiday-subscription-picker__region__name"},[i("h3",[a._v(a._s(n.country))]),a._v(" "),i("div",{staticClass:"holiday-subscription-picker__region__name__subline"},[a._v("\n\t\t\t\t\t"+a._s(n.datespan)+"\n\t\t\t\t")]),a._v(" "),i("div",{staticClass:"holiday-subscription-picker__region__name__subline"},[a._v("\n\t\t\t\t\t"+a._s(a.t("calendar","By {authors}",{authors:n.authors}))+"\n\t\t\t\t")])]),a._v(" "),i("div",{staticClass:"holiday-subscription-picker__region__subcribe"},[i("NcButton",{attrs:{disabled:a.loading||a.subscribing[n.source]||a.subscribed[n.source]},on:{click:function(i){return a.subscribe(n)}}},[a._v("\n\t\t\t\t\t"+a._s(a.subscribed[n.source]?a.t("calendar","Subscribed"):a.t("calendar","Subscribe"))+"\n\t\t\t\t")])],1)])}))],2)])}),[],!1,null,"7c272a24",null).exports},56931:(a,i,n)=>{var s=n(55889);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[a.id,s,""]]),s.locals&&(a.exports=s.locals);(0,n(45346).Z)("94c1b6f0",s,!0,{})}}]);
//# sourceMappingURL=calendar-holiday-subscription-picker.js.map?v=8b509f61bbbfb69fcb62