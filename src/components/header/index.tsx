import { Affix, Modal } from "antd";
import LinkButton from "../link-button";
import './index.less';
import {
	ExclamationCircleOutlined,
  } from '@ant-design/icons';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		userInfo: state.userinfo
	}
}

const Header = ({userInfo}) => {
	const logOut = () => {
		Modal.confirm({
			content: '是否退出',
			icon: <ExclamationCircleOutlined />,
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				sessionStorage.removeItem('user')
			},
			onCancel: () => {
				console.log('cancel');
			},
		});
	}
	return (
		<Affix offsetTop={0}>
		<div className="header">
			<div className="header-top">
				<span>欢迎，{userInfo.username}</span>
				<LinkButton onClick={logOut}>退出</LinkButton>
			</div>
		</div>
		</Affix>
	);
}


export default connect(mapStateToProps)(Header);
