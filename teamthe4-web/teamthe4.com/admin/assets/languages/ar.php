<?php 
function lang($phrase){
static $lang = array('about' => 'إعرفنا',
'about_section_updated' => 'حول تحديث القسم !',
'account' => 'تم تحديث حسابك !',
'active' => 'نشط',
'active_zoom' => 'تكبير نشط',
'address' => 'عنوان',
'add_new' => 'اضف جديد',
'all' => 'الكل',
'allows_for_image_file_type' => 'يسمح لنوع ملف الصورة',
'awesome' => 'رائع !',
'background' => 'خلفية',
'background_color' => 'لون الخلفية',
'background_menu_color' => 'لون خلفية القائمة',
'background_options_updated' => 'تم تحديث خيارات الخلفية !',
'background_settings' => 'إعدادات شريط التمرير',
'background_updated' => 'تحديث الخلفية !',
'backup' => 'النسخ احتياطي',
'blog' => 'مدونة',
'blog_posts' => 'بلوق وظائف',
'blog_section_updated' => 'تحديث قسم المدونة',
'blog_settings' => 'إعدادات بلوق',
'border' => 'الحدود',
'border_color' => 'لون الحدود',
'border_radius' => 'دوران الحدود',
'boxed_slider' => 'شريط محاصر',
'button_text' => 'نص الزر',
'by' => 'بواسطة',
'categories' => 'الاقسام',
'category' => 'الفئة',
'category_id' => 'معرف الفئة',
'choose_one' => 'اختيار واحد',
'city' => 'مدينة',
'clients' => 'مشتركين',
'clients_registered' => 'المشترك مسجل',
'client_information' => 'معلومات المشترك',
'client_options' => 'خيارات المشترك',
'client_support_information' => 'معلومات دعم المشترك',
'client_updated' => 'تم تحديث المشترك !',
'close' => 'قريب',
'code' => 'الكود',
'color' => 'اللون',
'coming_settings' => 'قريبا الميزات',
'contacts' => 'إتصل',
'contacts_section_updated' => 'تحديث قسم الاتصالات',
'contacts_updated' => 'تم تحديث جهات الاتصال',
'contact_form' => 'نموذج الاتصال',
'contact_form_updated' => 'نموذج الاتصال المحدث !',
'contact_settings' => 'إعدادات الاتصال',
'contact_updated' => 'تحديث الاتصال',
'content' => 'يحتوى',
'countdown' => 'العد التنازلي',
'countdwon_updated' => 'تم تحديث العد التنازلي !',
'counters' => 'عدادات',
'counter_color' => 'لون العداد',
'counter_options' => 'خيارات العداد',
'counter_total_updated' => 'تحديث إجمالي العداد',
'counter_updated' => 'عداد تحديث',
'country' => 'الدولة',
'current_background' => 'الخلفية الحالية',
'current_blog_posts' => 'المشاركات الحالية لكل صفحة',
'current_contact_type' => 'نوع الاتصال الحالي',
'current_counters' => 'عدادات الحالية',
'current_image' => 'الصورة الحالية',
'current_menu_type' => 'نوع القائمة الحالية',
'current_portfolio_type' => 'نوع المعرض الحالية',
'current_pricing_type' => 'نوع التسعير الحالي',
'current_services' => 'الخدمات الحالية',
'current_services_type' => 'نوع الخدمات الحالية',
'current_slider_type' => 'شريط التمرير الحالي',
'current_tables' => 'الجداول الحالية',
'custom_css' => 'CSS لغة تنسيق ويب',
'custom_css_updated' => 'عرف المغلق تحديث !',
'custom_pages' => 'صفحات مخصصة',
'custom_page_options' => 'خيارات الصفحة المخصصة',
'dashboard' => 'لوحة القيادة',
'dashboard_info' => 'معلومات لوحة القيادة',
'database_options' => 'خيارات قاعدة البيانات',
'date' => 'تاريخ',
'date_color' => 'تاريخ اللون',
'date_size' => 'حجم التاريخ',
'day' => 'يوم',
'default_language_in_control_panel' => 'اللغة الافتراضية في لوحة التحكم',
'degrade_color' => 'لون الشبكة',
'delete' => 'حذف',
'delete_event' => 'حذف الحدث',
'delete_image' => 'حذف صورة',
'delete_type' => 'حذف النوع',
'delete_video' => 'حذف الفيديو',
'description' => 'الوصف',
'edit' => 'تصحيح',
'edit_category' => 'تحرير الفئة',
'edit_client' => 'تحرير المشترك',
'edit_counter' => 'تحرير العداد',
'edit_custom_page' => 'تحرير صفحة مخصصة',
'edit_languages' => 'تعديل اللغات',
'edit_member' => 'تحرير عضو',
'edit_partner' => 'تحرير الشريك',
'edit_password' => 'تحرير كلمة المرور',
'edit_post' => 'تعديل المنشور',
'edit_project' => 'تحرير المشروع',
'edit_service' => 'تحرير أيقونة الخدمة',
'edit_service_img' => 'تحرير خدمة الصور',
'edit_skill' => 'تحرير المهارة',
'edit_slide' => 'تحرير الشرائح',
'edit_support' => 'تحرير الدعم',
'edit_table' => 'تحرير الجدول',
'edit_testimonial' => 'تعديل توصية - تزكية',
'edit_theme' => 'تحرير الموضوع',
'email' => 'البريد الإلكتروني',
'email_already_exists' => 'البريد الإلكتروني مسجل مسبقا!',
'email_body' => 'هيئة البريد الإلكتروني',
'email_header_text' => 'نص رأس البريد الإلكتروني',
'email_holder' => 'نائب البريد الإلكتروني',
'em_error_messages' => 'رسالة خطأ البريد الإلكتروني',
'enable_change_of_direction_in_control_panel' => 'تمكين تغيير الاتجاه في لوحة التحكم',
'enable_change_of_direction_in_the_interface' => 'تمكين تغيير الاتجاه في الواجهة',
'enable_image' => 'تمكين الصورة',
'enable_image_list' => 'قائمة الصور',
'end_date' => 'تاريخ الانتهاء',
'enword_translate' => 'كلمة المصدر إنجليزي',
'error' => 'هناك نوع من الخطأ !',
'error_message' => 'رسالة خطأ النص',
'events' => 'أحداث',
'events_created' => 'الأحداث التي تم إنشاؤها',
'event_details' => 'تفاصيل الحدث',
'expired' => 'منتهية الصلاحية',
'export' => 'تصدير',
'export_client_list' => 'تصدير قائمة المشتركين',
'export_language_file' => 'تصدير ملف اللغة',
'export_the_language_file' => 'تصدير ملف اللغة',
'facebook' => 'فيس بوك',
'failed_created' => 'لم يتم الانشاء',
'failed_update' => 'فشل التحديث',
'firstname' => 'تسمية الاسم الأول',
'first_name_holder' => 'نائب الاسم الأول',
'fn_error_messages' => 'رسالة خطأ الاسم الأول',
'follow_us' => 'تابعنا',
'footer_color' => 'لون خلفية التذييل',
'footer_information' => 'تذييل المعلومات',
'footer_text' => 'نص تذييل الصفحة',
'forgot_password' => 'هل نسيت كلمة المرور',
'form_labels' => 'تسميات النموذج',
'from_text' => 'من النص',
'fullscreen_slider' => 'منزلق ملء الشاشة',
'fullwidth_slider' => 'شريط التمرير العرض الكامل',
'gdpr_settings' => 'إعدادات الناتج القومي الإجمالي',
'google_font' => 'خط جوجل',
'google_maps_api' => 'خرائط جوجل API',
'google_maps_api_or_ifram' => 'Api or Ifram تضمين الخرائط',
'google_maps_ifram' => 'Ifram تضمين خرائط',
'google_maps_link_share' => 'مشاركة رابط الموقع',
'google_map_updated' => 'تم تحديث خريطة جوجل !',
'google_translate' => 'جوجل المترجم',
'height' => 'ارتفاع',
'help' => 'أبعاد الصورة الصحيحة لإعداد شريط التمرير:',
'help1' => 'يمكن تحديد هذه الخيارات على:',
'help2' => 'سيتم تطبيق نص الخلفية فقط على الصورة الثابتة والجزيئات على إعدادات شريط التمرير.',
'hint' => 'ملحوظة',
'home' => 'الرئيسية',
'homepage' => 'الصفحة الرئيسية',
'hostname' => 'اسم المضيف',
'hover_menu_background_color' => 'تبديل القائمة تحوم لون الخلفية',
'hover_menu_color' => 'تبديل لون القائمة تحويم',
'html_code' => 'HTML كود اتش تي ام إل',
'icon' => 'أيقونة',
'image' => 'صورة',
'images_slideshow' => 'صور عرض الشرائح',
'image_file_type_is_not_acceptable' => 'نوع ملف الصورة غير مقبول',
'impossible' => 'تحتاج إلى حذف الصورة الأولى قبل تحميل صورة جديدة!',
'input_error_messages' => 'رسائل خطأ الإدخال',
'input_placeholders' => 'نائب عناصر الإدخال',
'ip_address' => 'IP عنوان أي بي',
'items_color' => 'لون عناصر قائمة الشريط الجانبي',
'keywords' => 'الكلمات الدالة',
'language' => 'اللغة الحالية',
'language_direction' => 'إتجاة اللغة',
'lastname' => 'اسم العائلة',
'last_name_holder' => 'نائب الإسم الأخير',
'latest_posts' => 'آخر المشاركات',
'latitude' => 'خط العرض',
'left' => 'يسار',
'link' => 'حلقة الوصل',
'linkedin' => 'لينكد إن',
'ln_error_messages' => 'رسالة خطأ اسم العائلة',
'loaders_style' => 'اللوادر نمط',
'loader_color' => 'لون لوجو التحميل',
'loader_color_updated' => 'تم تحديث لون لوجو التحميل !',
'loader_type_updated' => 'نوع اللودر محدث',
'login' => 'تسجيل الدخول',
'logo' => 'شعار',
'logo_options' => 'خيارات الشعار',
'logo_text' => 'نص الشعار',
'log_in_into_your_account' => 'تسجيل الدخول إلى حسابك',
'log_out' => 'الخروج',
'longitude' => 'خط الطول',
'main' => 'الأساسية',
'map' => 'خرائط جوجل',
'media' => 'مكتبة الوسائط',
'member_updated' => 'تم تحديث العضو',
'menu' => 'القائمة',
'menu_background_color' => 'تبديل لون خلفية القائمة',
'menu_color' => 'تبديل لون القائمة',
'menu_order' => 'ترتيب القائمة',
'menu_order_updated' => 'تم تحديث ترتيب القائمة',
'menu_settings' => 'إعدادات القائمة',
'menu_updated' => 'تم تحديث القائمة',
'message' => 'رسالة',
'message_holder' => 'نائب الرسالة',
'mg_error_messages' => 'رسالة خطأ رسالة',
'month' => 'شهر',
'more' => 'أكثر من',
'name' => 'اسم',
'newsletter' => 'النشرات الإخبارية',
'new_category' => 'فئة جديدة',
'new_category_created' => 'فئة جديدة تم إنشاؤها',
'new_client' => 'مشترك جديد',
'new_client_created' => 'مشترك جديد تم إنشاؤه !',
'new_counter' => 'عداد جديد',
'new_counter_created' => 'إنشاء عداد جديد',
'new_custom_page' => 'صفحة مخصصة جديدة',
'new_event' => 'حدث جديد',
'new_event_created' => 'حدث جديد تم إنشاؤه',
'new_image_uploaded' => 'تم تحميل صورة جديدة',
'new_language' => 'لغة جديدة',
'new_media' => 'صورة جديدة',
'new_member' => 'عضو جديد',
'new_member_created' => 'عضو جديد تم إنشاؤه',
'new_newsletter' => 'النشرة الإخبارية الجديدة',
'new_page' => 'صفحة جديدة',
'new_page_created' => 'صفحة جديدة تم إنشاؤها',
'new_partner' => 'شريك جديد',
'new_partner_created' => 'شريك جديد تم إنشاؤه',
'new_password' => 'كلمة السر الجديدة',
'new_password_created' => 'كلمة مرور جديدة تم إنشاؤها !',
'new_password_repeat' => 'أعد كلمة السر',
'new_post' => 'منشور جديد',
'new_post_created' => 'تم إنشاء منشور جديد',
'new_project' => 'مشروع جديد',
'new_project_created' => 'مشروع جديد تم إنشاؤه',
'new_service' => 'خدمة جديدة',
'new_service_created' => 'تم إنشاء خدمة جديدة',
'new_skill' => 'مهارة جديدة',
'new_skill_created' => 'مهارة جديدة تم إنشاؤها',
'new_support' => 'دعم جديد',
'new_support_created' => 'دعم جديد تم إنشاؤه !',
'new_table' => 'جدول تسعير جديد',
'new_table_created' => 'تم إنشاء جدول تسعير جديد',
'new_testimonial' => 'توصية جديدة',
'new_testimonial_created' => 'توصية جديدة تم إنشاؤها',
'new_theme' => 'موضوع جديد',
'new_theme_created' => 'قالب جديد تم إنشاؤه !',
'new_type' => 'نوع جديد',
'new_type_created' => 'نوع جديد تم إنشاؤه',
'new_zoom' => 'تكبير جديد',
'nice' => 'عمل جيد !',
'no' => 'لا',
'not_a_image' => 'هذه ليست صورة',
'not_email_format' => 'تنسيق البريد الإلكتروني غير صالح!',
'ok_message' => 'حسنا نص الرسالة',
'older' => 'اكبر سنا',
'oops' => 'عفوا !',
'or_click_to_select' => 'أو انقر لتحديد',
'other_info' => 'معلومات اخرى',
'own_background' => 'الخلفية الخاصة',
'own_video' => 'فيديو خاص',
'pages' => 'صفحات الموقع',
'pages_to_display' => 'صفحات للعرض',
'page_hits_visualizations' => 'مشاهدات الصفحة',
'page_id' => 'معرف الصفحة',
'page_updated' => 'تم تحديث الصفحة',
'parallax' => 'صورة المنظر',
'particles' => 'حبيبات',
'particles_background' => 'خلفية الجسيمات',
'particles_color' => 'لون الجسيمات',
'particles_updated' => 'تحديث الجسيمات',
'partners' => 'شركاء',
'partners_id' => 'معرف الشركاء',
'partners_section_updated' => 'تحديث قسم الشركاء',
'partner_updated' => 'تم تحديث الشريك',
'password' => 'كلمه السر',
'passwords' => 'كلمات السر',
'passwords_information' => 'معلومات كلمات السر',
'passwords_saved' => 'كلمات المرور المحفوظة',
'password_updated' => 'تم تحديث كلمة السر !',
'percent' => 'نسبه مئويه',
'phone' => 'هاتف',
'phone_holder' => 'نائب الهاتف',
'place_your_email' => 'ضع بريدك الإلكتروني هنا',
'please_confirm_the_data' => 'يرجى تأكيد البيانات',
'portfolio' => 'أعمالنا',
'portfolio_section_updated' => 'تحديث قسم المعرض',
'portfolio_settings' => 'إعدادات المعرض',
'portfolio_updated' => 'تحديث المعرض',
'postcode' => 'الرمز البريدي',
'posts' => 'المشاركات',
'post_updated' => 'آخر تحديث',
'price' => 'السعر',
'pricing_tables' => 'الباقات',
'pricing_tables_settings' => 'إعدادات جداول التسعير',
'pricing_tables_type' => 'نوع جداول التسعير',
'pricing_table_updated' => 'تم تحديث جدول التسعير',
'pricing_type_updated' => 'تم تحديث نوع التسعير',
'primary_sections_background_color' => 'لون خلفية الأقسام الأساسية',
'primary_text_color' => 'لون النص الأساسي',
'privacy' => 'الخصوصية',
'privacy_section_updated' => 'تم تحديث قسم الخصوصية',
'progress' => 'تقدم',
'progress_bar' => 'شريط التقدم',
'progress_bar_updated' => 'تم تحديث شريط التقدم !',
'project_description' => 'وصف المشروع',
'project_id' => 'معرف المشروع',
'project_updated' => 'تم تحديث المشروع',
'purchase' => 'شراء',
'purchase_code' => 'كود شراء',
'recent' => 'الأخيرة',
'register' => 'اشترك الآن ومعرفة المزيد عن عملنا !',
'register_date' => 'تاريخ التسجيل',
'released' => 'صدر',
'required_data_does_not_exist' => 'البيانات المطلوبة غير موجودة',
'restore' => 'استعادة',
'right' => 'يمين',
'save' => 'حفظ',
'save_all' => 'احفظ الكل',
'save_selection' => 'اختيار حفظ',
'saving' => 'جاري الحفظ',
'see_more' => 'شاهد المزيد',
'select_background' => 'اختر الخلفية',
'select_category' => 'اختر الفئة',
'select_contact_type' => 'اختر نوع الاتصال',
'select_counter_total' => 'حدد عداد المجموع',
'select_image' => 'اختر صورة',
'select_menu_type' => 'اختر نوع جديد',
'select_portfolio_type' => 'اختر نوع المعرض',
'select_posts_total' => 'حدد المشاركات لكل صفحة',
'select_pricing_type' => 'اختر نوع التسعير',
'select_services_total' => 'حدد الخدمات المجموع',
'select_services_type' => 'اختر نوع الخدمات',
'select_slider_type' => 'حدد نوع شريط التمرير',
'select_tables_total' => 'حدد الجداول المجموع',
'select_theme' => 'اختر نمطا',
'select_type' => 'نوع الحدث',
'send_to_text' => 'إرسال إلى النص',
'seo' => 'إعدادات السيو',
'seo_updated' => 'سيو تحديث !',
'server_credentials' => 'خادم بيانات الاعتماد',
'services' => 'خدمات',
'services_section_updated' => 'تحديث قسم الخدمات',
'services_total_updated' => 'إجمالي الخدمات المحدثة !',
'services_type' => 'نوع الخدمات',
'services_type_updated' => 'نوع الخدمات المحدثة',
'service_details' => 'تفاصيل الخدمة',
'service_id' => 'معرف الخدمة',
'service_settings' => 'إعدادات الخدمات',
'service_updated' => 'تم تحديث الخدمة',
'settings' => 'الإعدادات',
'short_description' => 'وصف مختصر',
'size' => 'الحجم',
'skill' => 'مهارة',
'skills' => 'مهارات',
'skill_color' => 'لون المهارة',
'skill_updated' => 'مهارة محدثة',
'slide' => 'الشريحة',
'slider_type' => 'شريط التمرير',
'slider_type_updated' => 'تم تحديث نوع شريط التمرير',
'slide_background' => 'خلفية الشريحة',
'slide_id' => 'معرف الشريحة',
'slug' => 'سبيكة',
'small_description' => 'وصف صغير',
'social_networks' => 'شبكات اجتماعية',
'something_went_wrong' => 'هناك خطأ ما',
'start_date' => 'تاريخ البدء',
'static_background' => 'خلفية ثابتة',
'static_image' => 'صورة ثابتة',
'subject' => 'موضوع',
'subscribe' => 'إشترك الآن',
'subscribe_form' => 'نموذج الاشتراك',
'support' => 'الدعم',
'support_credentials' => 'دعم وثائق التفويض',
'support_end_date' => 'دعم تاريخ الانتهاء',
'support_updated' => 'تم تحديث الدعم !',
'tables' => 'الجداول',
'table_color' => 'لون الجدول',
'table_total_updated' => 'تم تحديث جداول التسعير',
'team' => 'الفريق',
'team_id' => 'معرف الفريق',
'testimonials' => 'التوصيات و التزكيات',
'testimonials_id' => 'معرف التوصية',
'testimonial_updated' => 'تم تحديث التوصية',
'text' => 'نص الخلفية',
'text_section_updated' => 'تم تحديث قسم النص في الخلفية !',
'theme' => 'موضوع',
'themes' => 'المواضيع',
'themes_created' => 'تم إنشاء قالب ',
'themes_information' => 'معلومات الموضوعات',
'theme_color_options' => 'خيارات لون القالب',
'theme_color_options_updated' => 'تم تحديث خيارات ألوان السمة',
'theme_name' => 'اسم الموضوع',
'theme_updated' => 'تم تحديث القالب !',
'theme_views' => 'الآراء',
'the_default_language_in_the_interface' => 'اللغة الافتراضية في الواجهة',
'time_accessed' => 'الوقت المتاح',
'title' => 'عنوان',
'top_image' => 'صورة رأس',
'total_of_unique_visitors' => 'مجموع الزوار الفريدين',
'translate' => 'ترجمة',
'translate_all' => 'ترجمة الكل',
'twitter' => 'تويتر',
'type' => 'نوع',
'typography_color' => 'لون الطباعة',
'update' => 'تحديث',
'update_info' => 'تحديث المعلومات',
'update_languages' => 'تحديث اللغات',
'upload_image' => 'تحميل الصور',
'upload_logo' => 'تحميل الشعار',
'upload_logo_image' => 'تحميل صورة الشعار',
'upload_project_image' => 'تحميل صورة المشروع',
'upload_video' => 'رفع فيديو',
'username' => 'اسم المستخدم',
'user_agent' => 'وكيل المستخدم',
'value' => 'القيمة',
'video_uploaded' => 'تم تحميل الفيديو !',
'view' => 'عرض الموقع',
'view_details' => 'عرض التفاصيل',
'view_in_dashboard' => 'عرض لوحة التحكم',
'view_in_frontend' => 'عرض الواجهة',
'view_link' => 'عرض الرابط',
'visitor_information' => 'معلومات الزائر',
'watch_project' => 'مشاهدة المشروع',
'wating_four_export' => 'إنتظر من إجل التصدير',
'wating_four_translate' => 'إنتظر من أجل الترجمة',
'website' => 'موقع الكتروني',
'website_credentials' => 'أوراق اعتماد الموقع',
'website_sections' => 'عناصر الموقع',
'website_sections_updated' => 'تحديث عناصر الموقع',
'website_title' => 'عنوان الموقع',
'width' => 'مقاس العرض',
'word' => 'الكلمة',
'words_size' => 'حجم الكلمات',
'word_id' => 'معرف الكلمة',
'word_translate' => 'ترجمة كلمة',
'year' => 'عام',
'yes' => 'نعم',
'your_email_here' => 'youremail@here.com',
'your_name_here' => 'اسمك هنا',
'youtube' => 'يوت يوب',
'youtube_background' => 'يوتيوب الخلفية',
'youtube_video' => 'فيديو يوتيوب',
'youtube_video_id' => 'يوتيوب معرف الفيديو',
'you_are_here' => 'أنت هنا',
'you_are_now_registered' => 'أنت الآن مسجل!',
'you_will_be_moved_to' => 'سوف يتم نقلك إلى',
 ) ;

$phrase=strtolower($phrase);
if (isset($lang[$phrase])){
return ucwords( $lang[$phrase] );
}else{
return ucwords( addword($phrase) );
//return $phrase;
} 
}
?>