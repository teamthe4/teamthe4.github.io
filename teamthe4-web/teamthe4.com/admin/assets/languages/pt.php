<?php

function lang($phrase){
    static $lang = array(
        'NAME' => 'Nome',
        'CLOSE' => 'Fechar',
		'UPDATE_INFO' => 'Actualizar Informação',
		'LOG_OUT' => 'Sair',
		'DASHBOARD' => 'Painel de Administração',
		'CLIENTS' => 'Subscritores',
		'SUPPORT' => 'Suporte',
		'THEMES' => 'Temas',
		'PASSWORDS' => 'Passwords',
		'VIEW_DETAILS' => 'Ver Mais',
		'NEW_CLIENT' => 'Novo Subscritor',
		'EDIT_CLIENT' => 'Editar Subscritor',
		'UPDATE_INFO' => 'Actualizar Informações',
		'WEBSITE' => 'Website',
		'LOGIN' => 'Login',
		'HOSTNAME' => 'Hostname',
		'USERNAME' => 'Username',
		'PASSWORD' => 'Password',
		'NEW_PASSWORD' => 'Nova Password',
		'NEW_THEME' => 'Novo Tema',
		'EDIT_PASSWORD' => 'Editar Password',
		'THEME' => 'Tema',
		'SELECT_THEME' => 'Seleccionar Tema',
		'LINK' => 'Link',
		'NEW_SUPPORT' => 'Novo Suporte',
		'EDIT_SUPPORT' => 'Editar Suporte',
		'PURCHASE_CODE' => 'Codigo de Compra',
		'REGISTER_DATE' => 'Data de Registo',
		'SUPPORT_END_DATE' => 'Data de Fim de Suporte',
		'EDIT_THEME' => 'Editar Tema',
		'DATE' => 'Data',
		'THEME_NAME' => 'Nome do Tema',
		'MORE' => 'Ver Mais',
		'CLIENT_INFORMATION' => 'Informacoes sobre o cliente',
		'EDIT' => 'Editar',
		'DELETE' => 'Apagar',
		'WEBSITE_CREDENTIALS' => 'Credenciais do Website',
		'SERVER_CREDENTIALS' => 'Credenciais do Servidor',
		'PASSWORDS_INFORMATION' => 'Informacoes das Passwords',
		'THEMES_INFORMATION' => 'Informacoes do Tema',
		'ACTIVE' => 'ACTIVO',
		'EXPIRED' => 'EXPIRADO',
		'CLIENT_SUPPORT_INFORMATION' => 'Informações de Suporte',
		'LANGUAGE' => 'Idioma Selecionado',
		'EMAIL' => 'Email',
		'AWESOME' => 'Maravilha!',
		'THEME_UPDATED' => 'Tema Actualizado!',
		'CLIENT_UPDATED' => 'Subscritor Actualizado!',
		'PASSWORD_UPDATED' => 'Password Actualizada!',
		'SUPPORT_UPDATED' => 'Suporte Actualizado!',
		'ACCOUNT' => 'A sua conta foi Actualizada!',
		'NEW_CLIENT_CREATED' => 'Novo Subscritor Criado!',
		'NEW_PASSWORD_CREATED' => 'Nova Password Criada!',
		'NEW_SUPPORT_CREATED' => 'Novo Suporte Criado!',
		'NEW_THEME_CREATED' => 'Novo Tema Criado!',
		'NEW_LANGUAGE' => 'Alterar Idioma',
		'CLIENTS_REGISTERED' => 'Subscritores Registados',
		'THEMES_CREATED' => 'Temas Criados',
		'PASSWORDS_SAVED' => 'Passwords Guardadas',
		'SUPPORT_CREDENTIALS' => 'Informações de Suporte',
		'THEME_VIEWS' => 'Visualizações',
		'PAGE_HITS_VISUALIZATIONS' => 'Número de clicks',
		'DASHBOARD_INFO' => 'Informação do Painel',
		'VISITOR_INFORMATION' => 'Informações dos Visitantes',
		'NEW_PASSWORD_REPEAT' => 'Repita a Password',
		'TOTAL_OF_UNIQUE_VISITORS' => 'Total de visitantes únicos',
		'IP_ADDRESS' => 'IP Adress',
		'USER_AGENT' => 'Browser utilizado',
		'TIME_ACCESSED' => 'Hora de acesso',
		'EVENTS' => 'Eventos',
		'NEW_EVENT' => 'Novo Evento',
		'TITLE' => 'Titulo',
		'START_DATE' => 'Data Inicial',
		'END_DATE' => 'Data Final',
		'DESCRIPTION' => 'Descrição',
		'EVENT_DETAILS' => 'Detalhes do Evento',
		'NEW_TYPE' => 'Novo Tipo de Evento',
		'SELECT_TYPE' => 'Tipo de Evento',
		'NEW_EVENT_CREATED' => 'Novo Evento Criado',
		'NEW_TYPE_CREATED' => 'Novo Tipo de Evento Criado',
		'DELETE_EVENT' => 'Apagar Evento',
		'VIEW_LINK' => 'Ver Link',
		'EVENTS_CREATED' => 'Eventos Criados',
		'DELETE_TYPE' => 'Apagar Tipo de Evento',
		'WEBSITE_TITLE' => 'Titulo do Website',
		/*New stuff*/
		'CONTACTS' => 'Contactos',
		'BACKGROUND' => 'Background',
		'PROGRESS' => 'Progresso',
		'COUNTDOWN' => 'Countdown',
		'MAIN' => 'Main',
		'TWITTER' => 'Twitter',
		'EXPORT' => 'Exportar',
		'PROGRESS_BAR' => 'Barra de Progresso',
		'ABOUT' => 'Sobre Nós',
		'MAP' => 'Google Map',
		'SERVICES' => 'Serviços',
		'TESTIMONIALS' => 'Testemunhos',
		'TESTIMONIAL_UPDATED' => 'Testemunhos Actualizados!',
		'NEW_TESTIMONIAL_CREATED' => 'Novo Testemunho Criado!',
		'PARTNERS' => 'Parceiros',
		'NEW_PARTNER_CREATED' => 'Novo Parceiro Criado',
		'PARTNER_UPDATED' => 'Parceiro Actualizado!',
		'BACKGROUND_SETTINGS' => 'Slider',
		'SERVICE_SETTINGS' => 'Configurações dos Serviços',
		'WEBSITE_SECTIONS' => 'Secções',
		'DATABASE_OPTIONS' => 'Opções da Base de dados',
		'THEME_COLOR_OPTIONS' => 'Opções de Cor do Website',
		'CUSTOM_CSS' => 'Custom CSS',
		'COMING_SETTINGS' => 'Configurações da Coming Soon',
		'SETTINGS' => 'Configurações',
		'NEWSLETTER' => 'Newsletters',
		'NEW_NEWSLETTER' => 'Nova Newsletter',
		'CONTACT_FORM' => 'Formulário de Contacto',
		'PLACE_YOUR_EMAIL' => 'Coloque o seu Email de Contacto',
		'EMAIL_BODY' => 'Corpo do Email',
		'FROM_TEXT' => '"De" texto',
		'SEND_TO_TEXT' => '"Enviar para" texto',
		'SUBJECT' => 'Assunto',
		'OK_MESSAGE' => 'Texto "Enviado com sucesso"',
		'ERROR_MESSAGE' => 'Texto "Email não enviado"',
		'EMAIL_HEADER_TEXT' => 'Texto de Cabeçalho de Email',
		'FORM_LABELS' => 'Textos dos Campos de Email',
		'FIRSTNAME' => 'Primeiro Nome',
		'LASTNAME' => 'Ultimo Nome',
		'PHONE' => 'Telefone',
		'MESSAGE' => 'Mensagem',
		'BUTTON_TEXT' => 'Texto do botão Enviar',
		'INPUT_PLACEHOLDERS' => 'Placeholders das caixas de texto',
		'FIRST_NAME_HOLDER' => 'Placeholder Primeiro Nome',
		'LAST_NAME_HOLDER' => 'Placeholder Ultimo Nome',
		'EMAIL_HOLDER' => 'Placeholder Email',
		'PHONE_HOLDER' => 'Placeholder telefone',
		'MESSAGE_HOLDER' => 'Placeholder Mensagem',
		'INPUT_ERROR_MESSAGES' => 'Mensagens de erro das caixas de texto do Formulário',
		'FN_ERROR_MESSAGES' => 'Mensagem de Erro "Primeiro Nome"',
		'LN_ERROR_MESSAGES' => 'Mensagem de Erro "Ultimo Nome"',
		'EM_ERROR_MESSAGES' => 'Mensagem de Erro "Email"',
		'MG_ERROR_MESSAGES' => 'Mensagem de Erro "Mensagem"',
		'SEO' => 'Configurações de SEO',
		'STATIC_IMAGE' => 'Imagem Estática',
		/*MORE NEW STUFF*/
		'IMAGES_SLIDESHOW' => 'SlideShow de Imagens',
		'YOUTUBE_VIDEO' => 'Video do Youtube',
		'OWN_VIDEO' => 'Video Próprio',
		'UPLOAD_IMAGE' => 'Carregar Imagem',
		'ADD_NEW' => 'Adicionar Nova',
		'YOUTUBE_VIDEO_ID' => 'Youtube Video ID',
		'ERROR' => 'Ocorreu um erro!',
		'NICE' => 'Bom trabalho!',
		'VIDEO_UPLOADED' => 'O video foi carregado!',
		'NOT_A_IMAGE' => 'Isso não é uma imagem.',
		'NEW_IMAGE_UPLOADED' => 'Nova imagem carregada!',
		'UPLOAD_VIDEO' => 'Upload Video',
		'UPLOAD_LOGO' => 'Upload Logo',
		'LOGO_OPTIONS' => 'Opções de Logótipo',
		'LOGO_TEXT' => 'Texto de Logoótipo',
		'VIEW' => 'Ver Website',
		'IMPOSSIBLE' => 'Tem de apagar a imagem existente antes de fazer upload de uma nova imagem!',
		'EXPORT_CLIENT_LIST' => 'Exportar Listagem de clientes',
		'BORDER_COLOR' => 'Cor da Borda',
		'DATE_COLOR' => 'Cor da Data',
		'TYPOGRAPHY_COLOR' => 'Cor da Tipografia',
		'CHOOSE_ONE' => 'Escolha um icon',
		'UPLOAD_LOGO_IMAGE' => 'Upload Logo',
		'NEW_PARTNER' => 'Novo Parceiro',
		'NEW_SERVICE' => 'Novo Serviço',
		'NEW_TESTIMONIAL' => 'Novo Testemunho',
		'BACKGROUND_COLOR' => 'Cor de Background',
		'SELECT_BACKGROUND' => 'Selecionar Background',
		'STATIC_BACKGROUND' => 'Estático',
		'SLIDE_BACKGROUND' => 'Slideshow',
		'YOUTUBE_BACKGROUND' => 'Youtube Video',
		'OWN_BACKGROUND' => 'Próprio Video',
		'CURRENT_BACKGROUND' => 'Background Actual',
		'CURRENT_SERVICES' => 'Serviços Actuais',
		'SELECT_SERVICES_TOTAL' => 'Número de Serviços',
		'BACKUP' => 'Backup',
		'RESTORE' => 'Restaurar',
		'GOOGLE_FONT' => 'Google Font',
		'LOADER_COLOR' => 'Cor do Loader',
		'MENU_COLOR' => 'Cor do Toggle Menu',
		'MENU_BACKGROUND_COLOR' => 'Cor de Fundo do Toggle Menu',
		'HOVER_MENU_COLOR' => 'Cor "Hover" do Toggle Menu',
		'HOVER_MENU_BACKGROUND_COLOR' => 'Cor "Hover" de Fundo do Toggle Menu',
		'PRIMARY_SECTIONS_BACKGROUND_COLOR' => 'Cor de Fundo das Secções Primárias',
		'PRIMARY_TEXT_COLOR' => 'Cor da Letra das Secções Primárias',
		'BACKGROUND_MENU_COLOR' => 'Cor de Fundo da Área do Menu',
		'ITEMS_COLOR' => 'Cor dos Items do Menu',
		'CLIENT_OPTIONS' => 'Subscritores',
		'ADDRESS' => 'Morada',
		'POSTCODE' => 'Código Postal',
		'CITY' => 'Cidade',
		'LATITUDE' => 'Latitude',
		'LONGITUDE' => 'Longitude',
		'OTHER_INFO' => 'Mais Informações',
		'SOCIAL_NETWORKS' => 'Redes Sociais',
		'CONTACTS_UPDATED' => 'Contactos Actualizados!',
		'FOOTER_TEXT' => 'Texto do Footer',
		'PERCENT' => 'Percentagem',
		'HEIGHT' => 'Altura',
		'PROGRESS_BAR_UPDATED' => 'Barra de Progresso Actualizado!',
		'YEAR' => 'Ano',
		'MONTH' => 'Mês',
		'DAY' => 'Dia',
		'BORDER_RADIUS' => 'Raio da Borda (px)',
		'BORDER' => 'Borda',
		'DATE_SIZE' => 'Tamanho da Data (px)',
		'WORDS_SIZE' => 'Tamanho das Palavras (px)',
		'LOADER_COLOR_UPDATED' => 'Cor do Loader Actualizado!',
		'COUNTDWON_UPDATED' => 'CountDown Actualizado!',
		'HTML_CODE' => 'Código HTML',
		'ABOUT_SECTION_UPDATED' => 'Secção Sobre Nós Actualizada!',
		'BACKGROUND_UPDATED' => 'Background Actualizado!',
		'SERVICES_TOTAL_UPDATED' => 'Total de Serviços Actualizado!',
		'GOOGLE_MAPS_API' => 'Google Maps API',
		'ACTIVE_ZOOM' => 'Zoom Activo',
		'NEW_ZOOM' => 'Novo Zoom',
		'GOOGLE_MAP_UPDATED' => 'Google Map Actualizado!',
		'WEBSITE_SECTIONS_UPDATED' => 'Secção Website Actualizado!',
		'LOGO' => 'LOGO',
		'CUSTOM_CSS_UPDATED' => 'Custom CSS Actualizado!',
		'BACKGROUND_OPTIONS_UPDATED' => 'Opções de Background Actualizado!',
		'CONTACT_FORM_UPDATED' => 'Formulário de Contacto Actualizado!',
		'KEYWORDS' => 'Palavras Chave',
		'SEO_UPDATED' => 'Seo Actualizado!',
		'IMAGE' => 'Imagem',
		'DELETE_IMAGE' => 'Apagar Imagem',
		'TEXT' => 'Texto do Background',
		'TEXT_SECTION_UPDATED' => 'Secção do Texto de Background Actualizada!',
		'YOUR_NAME_HERE' => 'Coloque o seu nome',
		'YOUR_EMAIL_HERE' => 'oseuemail@aqui.com',
		'SUBSCRIBE' => 'Subscrever',
		'REGISTER' => 'Subscreva já e conheça melhor o nosso trabalho!',
		'DELETE_VIDEO' => 'Apagar Video',
		'NEW_SERVICE_CREATED' => 'Novo Serviço Criado!',
		'PARTICLES_COLOR' => 'Cor das Particulas',
		'PARTICLES' => 'Particulas',
		'PARTICLES_BACKGROUND' => 'Particulas',
		'PARTICLES_UPDATED' => 'Particulas Actualizadas',
		'DEGRADE_COLOR' => 'Cor de Degradé',
		'CURRENT_CONTACT_TYPE' => 'Tipo de Formulário',
		'CONTACT_UPDATED' => 'Contact Updated',
		'TYPE' => 'Type',
		'PARALLAX' => 'Imagem Parallax',
		'CONTACT_SETTINGS' => 'Tipo de Contacto',
		'PORTFOLIO' => 'Portfolio',
		'NEW_PROJECT' => 'Novo Projecto',
		'PROJECT_DESCRIPTION' => 'Descrição de projecto',
		'UPLOAD_PROJECT_IMAGE' => 'Upload Imagem de Projecto',
		'SELECT_CONTACT_TYPE' => 'Tipo de Contacto',
		'NEW_PROJECT_CREATED' => 'Novo Projecto Criado',
		'PROJECT_UPDATED' => 'Projecto Actualizado',
		'CATEGORIES' => 'Categorias',
		'NEW_CATEGORY' => 'Nova Categoria',
		'CATEGORY' => 'Categoria',
		'NEW_CATEGORY_CREATED' => 'Nova Categoria Criada',
		'SUBSCRIBE_FORM' => 'Formulário de Subscrição',
		'ALL' => 'Todos',
		'SERVICE_UPDATED' => 'Serviço Actualizado',
		'PORTFOLIO_SETTINGS' => 'Tipo de Portfolio',
		'CURRENT_PORTFOLIO_TYPE' => 'Tipo Portfolio Actual',
		'SELECT_PORTFOLIO_TYPE' => 'Tipo de Portfolio',
		'WATCH_PROJECT' => 'Ver Projecto',
		'PORTFOLIO_UPDATED' => 'Portfolio Actualizado',
		'MENU_SETTINGS' => 'Localização de Menu',
		'CURRENT_MENU_TYPE' => 'Localização Actual',
		'SELECT_MENU_TYPE' => 'Nova Localização',
		'MENU_UPDATED' => 'Menu Actualizado',
		'ENABLE_IMAGE' => 'Adicionar Imagem',
		'ENABLE_IMAGE_LIST' => 'Mostrar List de Serviços com imagens',
		'SERVICES_TYPE' => 'Tipos de Serviço',
		'SELECT_SERVICES_TYPE' => 'Selecionar tipo de Serviço',		
		'CURRENT_SERVICES_TYPE' => 'Tipo de Serviço Actual',
		'SERVICES_TYPE_UPDATED' => 'Tipo de Serviços Actualizado',
		'THEME_COLOR_OPTIONS_UPDATED' => 'Opções de cor do tema actualizadas',
		/*Some more new stuff*/
		'EDIT_PARTNER' => 'Editar Parceiro',
		'EDIT_PROJECT' => 'Editar Projecto',
		'EDIT_SERVICE' => 'Editar Serviço (icon)',
		'EDIT_SERVICE_IMG' => 'Editar Serviço (imagem)',
		'EDIT_TESTIMONIAL' => 'Edit Testemunho',
		'SKILLS' => 'Competências',
		'NEW_SKILL' => 'Nova competência',
		'SKILL_COLOR' => 'Cor da competência',
		'PERCENT' => 'Percentagem',
		'NEW_SKILL_CREATED' => 'Nova competência criada',
		'SKILL' => 'Competência',
		'COLOR' => 'Cor',
		'EDIT_SKILL' => 'Editar competência',
		'SKILL_UPDATED' => 'Comptência Actualizada',
		'TEAM' => 'Equipa',
		'NEW_MEMBER' => 'Novo Elemento',
		'NEW_MEMBER_CREATED' => 'Novo elemento Criado',
		'EDIT_MEMBER' => 'Editar Membro',
		'MEMBER_UPDATED' => 'Membro Actualizado',
		'SMALL_DESCRIPTION' => 'Pequena Descrição',
		'PRICING_TABLES' => 'Tabelas de Preço',
		'NEW_TABLE' => 'Nova Tabela de Preço',
		'HINT' => 'Dica',
		'PRICE' => 'Preço',
		'PURCHASE' => 'Texto (compra)',
		'TABLE_COLOR' => 'Cor da Tabela',
		'NEW_TABLE_CREATED' => 'Nova Tabela de preços criada',
		'EDIT_TABLE' => 'Editar Tabela',
		'PRICING_TABLE_UPDATED' => 'Tabela de Preços Actualizada',
		'PAGES' => 'Páginas',
		'HOMEPAGE' => 'Homepage',
		'THEMES' => 'Temas',
		'FOOTER_INFORMATION' => 'Informação do Footer',
		'PAGES_TO_DISPLAY' => 'Páginas a Mostrar ',
		'SERVICES_SECTION_UPDATED' => 'Secção de Serviços Actualizada',
		'PORTFOLIO_SECTION_UPDATED' => 'Secção de Portfolio Actualizada',
		'PARTNERS_SECTION_UPDATED' => 'Secção de Parceiros Actualizada',
		'CONTACTS_SECTION_UPDATED' => 'Secção de Contactos Actualizada',
		'TOP_IMAGE' => 'Imagem do Header',
		'BLOG' => 'Blog',
		'NEW_POST' => 'Novo Post',
		'BLOG_POSTS' => 'Posts',
		'SLUG' => 'Slug',
		'EDIT_POST' => 'Editar Post',
		'POST_UPDATED' => 'Post Actualizado',
		'SEE_MORE' => 'Ver Mais',
		'BLOG_SECTION_UPDATED' => 'Secção do Blog Actualizada',
		'BY' => 'Por',
		'RELEASED' => 'Escrito',
		'LATEST_POSTS' => 'Ultimos Posts',
		'EMAIL_ALREADY_EXISTS' => 'Este email já se encontra registado!',
		'YOU_ARE_NOW_REGISTERED' => 'Obrigado pelo seu registo!',
		'NOT_EMAIL_FORMAT' => 'Formato de Email Inválido!',
		'CUSTOM_PAGES' => 'Páginas personalizadas',
		'CONTENT' => 'Conteudo',
		'NEW_PAGE' => 'Nova Página',
		'NEW_PAGE_CREATED' => 'Nova Página Criada',
		'CUSTOM_PAGE_OPTIONS' => 'Opções de página',
		'MEDIA' => 'Biblioteca de média',
		'NEW_MEDIA' => 'Nova Imagem',
		'PAGE_UPDATED' => 'Página Actualizada',
		'CURRENT_IMAGE' => 'Imagem Actual',
		'NEW_CUSTOM_PAGE' => 'Nova Página',
		'EDIT_CUSTOM_PAGE' => 'Editar Página',
		'SAVE_SELECTION' => 'Guardar Selecção',
		'SELECT_IMAGE' => 'Seleccionar Imagem',
		'NEW_IMAGE_UPLOADED' => 'Nova Imagem Adicionada',
		'MENU_ORDER' => 'Ordenação do Menu',
		'MENU_ORDER_UPDATED' => 'Ordenação do Menu Actualizada',
		/*NEW - 28.03.2018*/
		'COUNTERS' => 'Counters',
		'NEW_COUNTER' => 'Novo Counter',
		'COUNTER_COLOR' => 'Cor do Counter',
		'VALUE' => 'Value',
		'NEW_COUNTER_CREATED' => 'Novo Counter Criado',
		'COUNTER_UPDATED' => 'Counter Actualizado',
		'ICON' => 'Icon',
		'EDIT_COUNTER' => 'Editar Counter',
		'COUNTER_OPTIONS' => 'Opções dos Counters',
		'COUNTER_TOTAL_UPDATED' => 'Total de Counters Actualizados',
		'SELECT_COUNTER_TOTAL' => 'Seleccionar Total Counters',
		'CURRENT_COUNTERS' => 'Counters Actuais',
		'CURRENT_PRICING_TYPE' => 'Tipo de Tabelas de Preço',
		'SELECT_PRICING_TYPE' => 'Seleccione Tipo de Tabelas de Preço',
		'PRICING_TYPE_UPDATED' => 'Tipo de Tabelas de Preço Actualizada',
		'PRICING_TABLES_TYPE' => 'Tipo de Tabelas de Preço',
		'PRICING_TABLES_SETTINGS' => 'Opções de Tabelas de Preço',
		'CURRENT_TABLES' => 'Tabelas de Preços Actuais',
		'TABLES' => 'Tabelas de Preço',
		'SELECT_TABLES_TOTAL' => 'Total Tabelas de Preço',
		'TABLE_TOTAL_UPDATED' => 'Total Tabelas de Preço Actualizadas',
		'SLIDER_TYPE' => 'Tipo de Slider',
		'CURRENT_SLIDER_TYPE' => 'Tipo de Slider Actual',
		'SELECT_SLIDER_TYPE' => '_Seleccione Tipo de Slider',
		'SLIDER_TYPE_UPDATED' => 'Tipo de Slider Actualizado',
		'GDPR_SETTINGS' => 'Opções de GDPR',
		'PRIVACY' => 'Privacidade',
		'PRIVACY_SECTION_UPDATED' => 'Secção de Privacidade Actualizada',
		'BLOG_SETTINGS' => 'Opções de Blog',
		'SELECT_POSTS_TOTAL' => 'Seleccione Nº de Posts por Página',
		'CURRENT_BLOG_POSTS' => 'Nr. de Posts por Página Actuais',
		'POSTS' => 'Posts',
		'OLDER' => 'Antigos',
		'RECENT' => 'Recentes',
		'LOADERS_STYLE' => 'Estilo de Loaders',
		'LOADER_TYPE_UPDATED' => 'Tipo de Loader Actualizado',
		'NEW_POST_CREATED' => 'Novo Post Criado',
		'HELP' => 'Dimensões correctas para as imagens do slider:',
		'HELP1' => 'Estas dimensões podem ser seleccionadas em:',
		'HELP2' => 'O texto de background apenas será aplicado no caso de utilizar a Imagem Estática ou Particulas se forem seleccionadas nas opções do slider.',
		'FOOTER_COLOR' => 'Cor de Background do Footer',
		'' => '',
		
    );
    if (isset($lang[$phrase])){
	return $lang[$phrase];
	}else{
	return $phrase;
}
}

?>