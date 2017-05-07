(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	function config($translateProvider) {
		$translateProvider.translations('eng', {
			"WELCOME": "Welcome to Hasala!",
			"EMAIL": "Email",
			"PASSWORD": "Password",
			"LOGIN": "Login",

			"FOLLOWERS": "Followers",
			"VIEWS": "Views",
			"DONORS": "Donors",
			"TOTAL DONATIONS": "Total Dontations",
			"ON GOING": "On Going",
			"FINISHED": "Finished",
			"REGULAR UPDATES": "Regular updates",
			"MILESTONE UPDATES": "Milestone updates",
			"UPDATE NOW": "Update Now",
			"MAX 224": "Maximum 224 Characters",
			"CLICK TO UPLOAD": "Click to Upload",
			"LOGOUT": "Log out",
			"MY PROFILE": "My Profile",
			"MY HASALAS": "My Hasalas",
			"ADMIN PANEL": "Admin Panel",
			"ALL HASALAS": "All hasalas",
			"NEEDS UPDATES": "Needs updates",
			"ON GOING HASALAS": "On Going",
			"FINISHED HASALAS": "Finished",
			"EXPIRED": "Expired",
			"START HASALA": "Start A New Hasala",
			"ALL": "All",
			"HEALTH": "Health",
			"ORPHANS": "Orphans",
			"WATER": "Water",
			"EDUCATION": "Education",
			"CONTACT US": "Contact us",
			"UPDATE SUCCESSFULLY": "Updated Successfully",
			"COUNT DOWN": "Count Down",
			"CLOSE": "Close",
			"LETS UPDATE": "Let's Update the People!",
			"NOT STARTED ANY HASALA": "You haven't started any hasalas yet!",
			"START HASALA START CHANGE": "Start a Hasala, start the change", 
		});

		$translateProvider.translations('ar', {
			"WELCOME": "اهلا في حصالة!",
			"EMAIL": "البريد الالكتروني",
			"PASSWORD": "كلمة السر",
			"LOGIN": "تسجيل الدخول",

			"FOLLOWERS": "المتابعين",
			"VIEWS": "المشاهدات",
			"DONORS": "المتبرعين",
			"TOTAL DONATIONS": "جميع التبرعات",
			"ON GOING": "الحالي",
			"FINISHED": "انتهي",
			"REGULAR UPDATES": "المتابعة",
			"MILESTONE UPDATES": "تحديث المراحل",
			"UPDATE NOW": "نشر تحديث",
			"MAX 224": "الحد الاقصي 224 حرف",
			"CLICK TO UPLOAD": "تحميل صورة",
			"LOGOUT": "تسجيل الخروج",
			"MY PROFILE": "حسابي",
			"MY HASALAS": "الحصالات",
			"ADMIN PANEL": "لوحة الادارة",
			"ALL HASALAS": "جميع الحصالات",
			"NEEDS UPDATES": "بحاجة للتحديث",
			"ON GOING HASALAS": "جاري الان",
			"FINISHED HASALAS": "تم بنجاح",
			"EXPIRED": "انتهي",
			"START HASALA": "إبداء حصالة جديدة ",
			"ALL": "جميع المجالات",
			"HEALTH": "الرعاية الصحية",
			"ORPHANS": "رعاية الايتام",
			"WATER": "توصيل مياه",
			"EDUCATION": "التعليم",
			"CONTACT US": "تواصل معنا",
			"UPDATE SUCCESSFULLY": "تم التحديث بنجاح",
			"COUNT DOWN": "الوقت المتبقي",
			"CLOSE": "انهاء",
			"LETS UPDATE": "دعونا تحديث الناس!",
			"NOT STARTED ANY HASALA": "لم تبدأ أي هاسالاس حتى الان!",
			"START HASALA START CHANGE": "بدء هسالة، بدء التغيير", 
		});

		$translateProvider.preferredLanguage('eng');
	}

})();