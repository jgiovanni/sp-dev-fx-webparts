// // Panel 1 Images
// import popupPanel1t from '../images/Pop-Ups-L-1_02.png';
// import popupPanel1a from '../images/Pop-Ups-L-1_04.png';
// import popupPanel1b from '../images/Pop-Ups-L-1_06.png';
// // Panel 2 Images
// import popupPanel2t from '../images/Pop-Ups-L-2_02.png';
// import popupPanel2a from '../images/Pop-Ups-L-2_04.png';
// import popupPanel2b from '../images/Pop-Ups-L-2_06.jpg';
// // Panel 3 Images
// import popupPanel3t from '../images/Pop-Ups-L-3_02.jpg';
// import popupPanel3a from '../images/Pop-Ups-L-3_04.jpg';
// import popupPanel3b from '../images/Pop-Ups-L-3_06.jpg';
// // Panel 4 Images
// import popupPanel4t from '../images/Pop-Ups-L-4_02.png';
// import popupPanel4a from '../images/Pop-Ups-L-4_04.png';
// import popupPanel4b from '../images/Pop-Ups-L-4_06.png';
// // Panel 5 Images
// import popupPanel5t from '../images/Pop-Ups-L-5_02.png';
// import popupPanel5a from '../images/Pop-Ups-L-5_04.png';
// import popupPanel5b from '../images/Pop-Ups-L-5_06.png';
// // Panel 6 Images
// import popupPanel6t from '../images/Pop-Ups-L-6_02.png';
// import popupPanel6a from '../images/Pop-Ups-L-6_04.png';
// import popupPanel6b from '../images/Pop-Ups-L-6_06.png';
// // Panel 7 Images
// import popupPanel7t from '../images/Pop-Ups-L-7_02.png';
// import popupPanel7a from '../images/Pop-Ups-L-7_04.png';
// import popupPanel7b from '../images/Pop-Ups-L-7_06.png';
//
// // Panel A
// import plat from '../images/Pop-Ups-L-a_02.png';
// // Panel B
// import plbt from '../images/Pop-Ups-L-b_02.png';
// // Panel C
// import plct from '../images/Pop-Ups-L-c_02.png';
// // Panel D
// import pldt from '../images/Pop-Ups-L-d_02.png';
// // Panel E
// import plet from '../images/Pop-Ups-L-e_02.png';
//
// export default {
//     name: 'map',
//     data() {
//         return {
//             activePanel: null,
//             panels: [
//                 {
//                     title: '',
//                     titleImg: popupPanel1t,
//                     contentAImg: popupPanel1a,
//                     contentBImg: popupPanel1b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel2t,
//                     contentAImg: popupPanel2a,
//                     contentBImg: popupPanel2b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: plat,
//                     supportingDocuments: false,
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel3t,
//                     contentAImg: popupPanel3a,
//                     contentBImg: popupPanel3b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel4t,
//                     contentAImg: popupPanel4a,
//                     contentBImg: popupPanel4b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: plbt,
//                     supportingDocuments: false,
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel5t,
//                     contentAImg: popupPanel5a,
//                     contentBImg: popupPanel5b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: plct,
//                     supportingDocuments: false,
//                 },
//                 {
//                     title: '',
//                     titleImg: pldt,
//                     supportingDocuments: false,
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel6t,
//                     contentAImg: popupPanel6a,
//                     contentBImg: popupPanel6b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//                 {
//                     title: '',
//                     titleImg: plet,
//                     supportingDocuments: false,
//                 },
//                 {
//                     title: '',
//                     titleImg: popupPanel7t,
//                     contentAImg: popupPanel7a,
//                     contentBImg: popupPanel7b,
//                     supportingDocuments: true,
//                     supportingDocumentsUrl: 'https://google.ca'
//                 },
//
//             ],
//         }
//     },
//     methods: {
//         openPanel(stage) {
//             console.log('Load Stage: ', stage);
//             this.activePanel = this.panels[stage];
// //                var panel = document.getElementsByClassName('stage-panel');
// //                new fabric['Panel'](panel[0].querySelector(".ms-Panel"));
//         },
//         goBack() {
//             this.$emit('to-page', 'start');
//         },
//         pulseStart(e) {
//             if (e.target.classList.contains('fadeIn')) {
//                 e.target.classList.remove('fadeIn');
//             }
//             e.target.classList.add('pulse');
//             e.target.classList.add('infinite');
//             e.target.classList.add('animated');
//         },
//         pulseEnd(e) {
//             e.target.classList.remove('animated');
//         },
//     },
//     mounted() {
//         let StagePanels = document.getElementsByClassName("stage-panel");
//         for (let i = 0; i < StagePanels.length; i++) {
//             (function() {
//                 let StageIndicators = document.getElementsByClassName("stage-indicator");
//                 let PanelExamplePanel = StagePanels[i].querySelector(".ms-Panel");
//                 for (let j = 0; j < StageIndicators.length; j++) {
//                     StageIndicators[j].addEventListener("click", function(i) {
//                         new fabric['Panel'](PanelExamplePanel);
//                         // Intiate fadeInLeft animations
//                         let fades = PanelExamplePanel.querySelector(".fadeInLeft");
//                         if (fades)
//                             fades.classList.add('animated')
//                     });
//                 }
//             }());
//         }
//     }
// }