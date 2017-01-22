var app = angular.module('myApp', []);

app.controller("inprogressCtrl", function($scope) {
    $scope.inprogress = [
"WRS", "VOIS", "EPS", "FEP", "STEP", "CTF", "MASCOT", "IPCA", "AI Web", "CCDWS Authenticate", "Namecheck", "ACS", "CEAC_Status_Check", "CEAC_IV_App"
    ]
});          
app.controller("allCtrl", function($scope) {
	var str = "abcdefghijklmnopqrstuvwxyz";
  $scope.alphabet = str.toUpperCase().split("");

  $scope.activeLetter = '';

  $scope.activateLetter = function(letter) {


    $scope.activeLetter = letter
  }
    $scope.all = [
"Bulk NIV Case Transfer", "NIV ONLN Submission",
"CEAC CTRAC",
"CEAC GENNIV",
"CEAC PPS",
"CEAC Web IV Report",
"CEAC Web NIV PHP Report",
"CEAC Web NIV Report",
"CEAC_IV_Summary",
"PPTSVC_SSALive",
"CCDWS",
"Accountable Items",
"eDP",
"eDP_Client",
"eDP-Web",
"ACRQ",
"ATS",
"CRBA",
"BTB CXI Web Service",
"CA XML CAViX and CAPiX",
"CA XML Specification",
"CXI FBI Inbound",
"CXI FBI Outbound",
"CXI FBI Website",
"CXI PreConfiguration SAM",
"CXI TSC Inbound",
"CXI TSC Outbound",
"CXI USMS Inbound",
"Database Security Requirements",
"DBRegedit",
"DLB",
"DLBRT",
"eCLASS",
"eCLASS Ling and DQ",
"iCLASS",
"Issuance",
"Issuance LAE",
"NAT",
"TCM",
"TPS",
"webCLASS",
"2DB",
"IAFOD",
"ESB_Redirector",
"MIS",
"PPT_Enterprise",
"PDITS",
"PDITS_ACS_PLUS_Ingest",
"SPA",
"PDITS_Passport_Ingest",
"PDITS_Search_ETL",
"PDITS_User_Activity_Ingest",
"PIERS",
"PIERS_Monitor",
"PIERS_MR_IR",
"PLOTS",
"PRAIS",
"PRISM",
"ECAS",
"UserManager",
"Visa Request System",
"CCD_PKG_DELETE_REQUEST",
"Interpol_rel",
"MATRIX",
"IACT Reporting",
"KCC Plato",
"NVC Plato",
"Fraud Assessment service",
"FraudAssessment",
"I-275",
"CCD_Ingest",
"NCMEC",
"SSARealtime",
"Bio",
"CCD_FR",
"CCT",
"CSD_Reusable_Component",
"DVIS",
"RDC",
"eDV-AES",
"eDV-ESC",
"EVAF",
"INK",
"IVAMS",
"IVAMS WEB",
"IVO",
"PIMS",
"TPLS (10-Print)",
"SQSIV (.NET)",
"ACRS",
"ACRS_SAV",
"TSG",
"CA LTA Module under CADSS",
"CABS Module under CADSS",
"CADSS Framework",
"CAPA Module under CADSS",
"CST Data",
"RequisitionTracker Module under CADSS",
"CST_PWD",
"CST-Admin",
"OPSS",
"AFS",
"BCCCP",
"TFSS",
"CA XML Inbound",
"CLASS Web Service",
"CXI CA XML Inbound",
"CXI DACS Inbound",
"CXI DEA Inbound",
"CXI DOD",
"CXI EARM Inbound",
"CXI HHS Inbound",
"CXI HHS Resync",
"CXI Installer Package",
"CXI Interpol Outbound",
"CXI Refusal Layer",
"CXI TECS",
"CXI TECS Resync",
"CXI TECS Website",
"NIV",
"TDIS",
"TDIS_PURGE",
"TDIS_Web Inquiry",
"CEAC AGNATO",
"CEAC Appoint_Email",
"CEAC IV_Agent",
"CEAC Landing",
"CEAC ODC",
"CEAC Web KCC_Report",
"CEAC Web NVC_Report",
"CEAC_Bulk_Transfer",
"CEAC_IV_App",
"CEAC_Status_Check",
"ACS",
"Namecheck",
"CCDWS Authenticate",
"AI Web",
"IPCA",
"MASCOT",
"CTF",
"STEP",
"FEP",
"EPS",
"VOIS",
"WRS"

    ]
});    
// app.controller('firstCtrl', function($scope) {
//   var str = "abcdefghijklmnopqrstuvwxyz";
//   $scope.alphabet = str.toUpperCase().split("");

//   $scope.activeLetter = '';

//   $scope.activateLetter = function(letter) {


//     $scope.activeLetter = letter
//   }

//   $scope.users = [
//   {
//     name: 'ACRQ, ATS, ACRS, ACRS_SAV, AFS, ACS, AI Web'
//   }, 
//   {
//     name: 'BCCCP, Bio, BTB CXI Web Service, Bulk NIV Case Transfer'
//   },
//   {
//     name: 'CEAC CTRAC, CEAC GENNIV, CEAC PPS, CEAC Web IV Report, CEAC Web NIV PHP Report, CEAC Web NIV Report, CCDWS, CRBA, CA XML CAViX and CAPiX, CA XML Specification, CXI FBI Inbound, CXI FBI Outbound, CXI FBI Website, CXI PreConfiguration SAM, CXI TSC Inbound, CXI TSC Outbound, CXI USMS Inbound, CCD_PKG_DELETE_REQUEST, CCD_Ingest, CCD_FR, CCT, CSD_Reusable_Component, CA LTA Module under CADSS, CABS Module under CADSS, CADSS Framework, CAPA Module under CADSS, CST Data, CST_PWD, CST-Admin, CA XML Inbound, CLASS Web Service, CXI CA XML Inbound, CXI DACS Inbound, CXI DEA Inbound, CXI DOD, CXI EARM Inbound, CXI HHS Inbound, CXI HHS Resync, CXI Installer Package, CXI Interpol Outbound, CXI Refusal Layer, CXI TECS, CXI TECS Resync, CXI TECS Website, CEAC AGNATO, CEAC Appoint_Email, CEAC IV_Agent, CEAC Landing, CEAC ODC, CEAC Web KCC_Report, CEAC Web NVC_Report, CEAC_Bulk_Transfer, CEAC_IV_App, CEAC_Status_Check, CCDWS Authenticate, CTF'
//   }, {
//     name: 'DVIS, DLBRT, DLB, DBRegedit, Database Security Requirements'
//   }, {
//     name: 'eDP, eDP_Client, eDP-Web, eCLASS, eCLASS Ling and DQ, ESB_Redirector, ECAS, EPS'
//   }, {
//     name: 'FraudAssessment, Fraud Assessment service'
//   }, {
//     name: 'IVO, IVAMS WEB, IVAMS, INK, I-275, IACT Reporting, Interpol_rel, IAFOD, Issuance LAE, Issuance, iCLASS, IPCA '
//   }, {
//     name: 'KCC Plato'
//   }, {
//     name: 'Leo'
//   }, {
//     name: 'MASCOT, MIS'
//   }, {
//     name: 'NAT, NCMEC, NIV, Namecheck, NIV ONLN Submission'
//   }, {
//     name: 'OPSS'
//   }, {
//     name: 'PIMS, PRISM, PRAIS, PLOTS, PIERS_MR_IR, PIERS_Monitor, PIERS, PDTIS_User_Activity_Ingest, PDITS_Search_ETL, PDITS_Passport_Ingest, PDITS_ACS_PLUS_Ingest, PDITS, PPT_Enterprise, PPTSVC_SSALive,   '
//   }, {
//     name: 'Leo'
//   }, {
//     name: 'RequisitionTracker Module under CADSS, RDC'
//   }, {
//     name: 'STEP, SQSIV (.NET), SSARealtime, SPA'
//   }, {
//     name: 'TDIS_Web Inquiry, TDIS_PURGE, TDIS, TFSS, TSG, TPLS (10-Print), TPS, TCM '
//   }, {
//     name: 'UserManager'
//   }
//   , {
//     name: 'VOIS, Visa Request System'
//   }
//   , {
//     name: 'WRS, webCLASS'
//   }];

// });


app.filter('startsWithLetter', function() {
  return function(items, letter) {

    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
$(function () {
 $('#container').highcharts({
    title: {
      text: 'Burndown Chart: CST Applications',
      x: -20 //center
    },
    colors: ['blue'],
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    subtitle: {
      text: 'Sprint 1',
      x: -50
    },
    xAxis: {
      title:{
        text: 'Application Status'
      },
      categories: ['All Applications', 'Done','In Progress', 'Goal']
    },
    yAxis: {
      tickAmount: 4,
      max: 270,
      title: {
        text: 'Number of Applications'
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: ' applications',
      crosshairs: true,
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{          
      name: 'Applications',
      color: 'rgba(255,0,0,0.25)',
      lineWidth: 2,
      data: [260,120,100, 0]
    
    }]
  });
});

