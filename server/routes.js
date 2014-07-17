module.exports =  {
	setup: function(app, middleware, controllers, Plugin) {
		var prefix = '/admin/plugins/' + Plugin.json.nbbId,
			apiPrefix = '/api' + prefix;

		app.get(prefix, middleware.admin.buildHeader, Plugin.render);
		app.get(apiPrefix, middleware.admin.buildHeader, Plugin.render);

		app.get(apiPrefix + '/config', Plugin.api.get.config);
		app.post(apiPrefix + '/config', Plugin.api.post.config);

		app.get(apiPrefix + '/status', Plugin.api.get.status);
		app.get(apiPrefix + '/logs', Plugin.api.get.logs);
	}
};