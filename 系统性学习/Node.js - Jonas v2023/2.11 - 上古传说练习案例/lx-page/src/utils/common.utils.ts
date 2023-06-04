import axios from 'axios';
import { UtilClearProps } from './index.model';

// 强制退出用户逻辑
export const handleUtilSignOut = () => {
	try {
		sessionStorage.clear();
		localStorage.setItem('user', null);
		location.href = '/login';
	} catch {
		console.warn('handleUtilSignOut error');
	}
};

// axios请求拦截;
// axios.interceptors.request.use(
// 	function (config) {
// 		try {
// 			// 核心: 拿到用户token
// 			if (
// 				localStorage.getItem('user') &&
// 				JSON.parse(localStorage.getItem('user'))
// 				// sessionStorage.getItem('user') &&
// 				// JSON.parse(sessionStorage.getItem('user'))
// 			) {
// 				// eslint-disable-next-line @typescript-eslint/naming-convention
// 				const { nirvana_token = '' } = JSON.parse(
// 					// sessionStorage.getItem('user')
// 					localStorage.getItem('user')
// 				);
// 				config.headers.nirvana_token = nirvana_token;
// 			}

// 			return config;
// 		} catch {
// 			return config;
// 		}
// 	},
// 	function (error) {
// 		return Promise.reject(error);
// 	}
// );

// axios请求结果拦截
axios.interceptors.response.use(
	function (response) {
		// 检测到token无效时退出用户登录
		if (response.data && response.data.code === 401) {
			handleUtilSignOut();
		}

		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export const request = async (props: any = {}) => {
	try {
		const {
			url = '',
			method = 'get',
			data = {},
			params = {},
			...otherProps
		} = props;

		const reqData = await axios({
			url,
			method,
			params: {
				...(method.toLowerCase() === 'get' ||
				method.toLowerCase() === 'delete'
					? data
					: {}),
				...params,
			},
			data: {
				...(method.toLowerCase() === 'post' ? data : {}),
			},

			...otherProps,
		});

		// 如果直接返回非object数据,则存放在data中,数组要做特殊逻辑
		const propAddData =
			reqData.data instanceof Array || !(reqData.data instanceof Object)
				? { data: reqData.data }
				: reqData.data;

		// 特殊逻辑: 以json中状态码为准( 其它项目可以选择删除此逻辑 )
		return reqData.status === 200 && propAddData.code
			? {
					code: reqData.status,
					...propAddData,
			  }
			: {
					...propAddData,
					code: reqData.status,
			  };
		// return {
		// 	...propAddData,
		// 	code: reqData.status,
		// };
	} catch {
		return {
			success: false,
			error: `${props.url} request error`,
			data: {},
		};
	}
};

// 递归查询对应值
export const handleUtilFindKey = (props) => {
	try {
		const {
			key = '',
			dataSource = [],
			keyName = 'key',
			mode = 'exact', // "router" | "exact"
		} = props;
		let item: any;
		let result = {};
		// eslint-disable-next-line no-restricted-syntax
		for (item of dataSource) {
			// 正确结果条件
			if (
				mode === 'router' &&
				(key === item[keyName] || `${key}/` === item[keyName]) // 兼容计算router时写法
			) {
				result = item;
				break;
			} else if (mode === 'exact' && key === item[keyName]) {
				result = item;
				break;
			}

			// 递归查询
			if (
				item.children instanceof Array &&
				Object.keys(result).length === 0
			) {
				result = handleUtilFindKey({
					key,
					dataSource: item.children,
					keyName,
				});
			}
		}

		return result;
	} catch {
		return {};
	}
};

// 过滤出指定字段,并清除不存在数据
export const handleUtilFilterArray = (props) => {
	try {
		const { dataSource = [], keyName = '' } = props;
		return dataSource.map((item) => item[keyName]).filter((cur) => !!cur);
	} catch {
		console.warn('handleUtilFilterArray error');
		return [];
	}
};

// [ "a","b" ] --> "a\nb"
// "a\nb" --> [ "a","b" ]
export const handleUtilCpuStringArray = ({
	stringData = '',
	arrayData = [],
	toType = 'string',
}) => {
	try {
		let result = toType === 'string' ? '' : [];
		if (toType === 'string') {
			result = arrayData.toString().replace(/,/g, '\n');
		} else {
			result = stringData.split('\n');
		}
		return result;
	} catch {
		console.warn('handleCpuValueData error');
		return toType === 'string' ? '' : [];
	}
};

export const handleUtilOpenWindow = (url) => {
	try {
		window.open(url);
	} catch {
		console.warn('handleUtilOpenWindow error');
	}
};

// 转字符串显示
export const handleUtilToString = (props) => {
	try {
		const { data = '' } = props;
		let result: any = '';

		if (typeof data === 'string' || typeof data === 'number') {
			result = data;
		} else if (typeof data === 'boolean') {
			result = data.toString();
		} else if (!data) {
			result = '空';
		} else {
			result = JSON.stringify(data);
		}

		return result;
	} catch {
		console.warn('handleUtilToString error');
		return '';
	}
};

// 清楚抓取表单的无用字段( 带_CLEAR的是无用字段 )
export const handleUtilClear = (props: UtilClearProps = {}) => {
	try {
		const { data = {}, keyName = '_CLEAR' } = props;
		const result = {};
		Object.keys(data).forEach((item) => {
			if (!item.includes(keyName)) {
				result[item] = data[item];
			}
		});
		return result;
	} catch {
		console.warn('handleUtilClear');
		return props.data;
	}
};
