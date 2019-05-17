
var lang = document.documentElement.lang;


function EliminaLanguage(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='language_word_translate.php?code_languages='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='language_word_translate.php?code_languages='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='language_word_translate.php?code_languages='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaServiceImage(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service_image.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service_image.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service_image.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTable(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_table.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_table.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_table.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaCounter(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counter.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counter.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counter.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaCountersImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counters_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counters_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_counters_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPost(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_post.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_post.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_post.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTeam(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_team.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_team.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_team.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaSkill(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_skill.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_skill.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_skill.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaService(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_service.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTestimonial(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonial.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonial.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonial.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTemas(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='themes_del.php?id_temas='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='themes_del.php?id_temas='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='themes_del.php?id_temas='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPartner(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partner.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partner.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partner.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaCliente(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_client.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_client.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_client.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	

}

function EliminaImage(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='delete.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='delete.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='delete.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaLogoImage(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_logo.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_logo.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_logo.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaImageSlide(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_image.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_image.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_image.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaVideo(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_video.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_video.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_video.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	

}

function EliminaPassword(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='passwords_del.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='passwords_del.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='passwords_del.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	

}

function EliminaSuporte(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='support_del.php?id_sup='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='support_del.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='support_del.php?id_sup='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaEvento(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='events_del.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='events_del.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='events_del.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTipo(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='types_del.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='types_del.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='types_del.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaAboutImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_about_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_about_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_about_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaServicesImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_services_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_services_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_services_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaTestimonialsImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonials_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonials_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_testimonials_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPartnersImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partners_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partners_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partners_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaContactformImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contactform_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contactform_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contactform_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaBlogImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_blog_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_blog_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_blog_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPartnersPageImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partnerspage_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partnerspage_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_partnerspage_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaBlogLatestImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_latest_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_latest_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_latest_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaContactsImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contacts_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contacts_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_contacts_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaProject(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_project.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_project.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_project.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaCategory(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_category.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_category.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_category.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPortfolioImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_portfolio_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_portfolio_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_portfolio_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPrivacyPageImageParallax(id){

if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_privacy_img.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_privacy_img.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_privacy_img.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	
	
}

function EliminaPage(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_page.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_page.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_page.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	

}

function EliminaMediaImage(id){
	
if(lang=='en'){	
	swal({   title: "Are you sure?",   text: "You will not be able to recover this information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel please!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_media.php?id='+id;   } else {     swal("Cancelled", "Your information is safe :)", "error");   } });
}
if(lang=='fr'){	
	swal({   title: "Êtes-vous sûr?",   text: "Vous ne pourrez pas récupérer cette information!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Oui, supprimez-le!",   cancelButtonText: "Non, annulez s'il vous plaît!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_media.php?id='+id;   } else {     swal("Cancelled", "Vos informations sont sécurisées :))", "error");   } });
}
if(lang=='pt'){	
	swal({   title: "Tem a certeza?",   text: "Não será possivel recuperar esta informação!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Apagar!",   cancelButtonText: "Cancelar!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    location.href='del_media.php?id='+id;   } else {     swal("Cancelado", "A sua informação está segura!", "error");   } });
}	

}