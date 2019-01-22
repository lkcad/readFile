import React from 'react';
import {
    Button, Form, Input, message,
} from 'antd';
import styles from './index.less';


@Form.create()
class AuthItemHeader extends React.PureComponent {
    handleCreateAuthModule=() => {
        const { onCreateAuthModule } = this.props;
        onCreateAuthModule();
    };

    handleRefreshData=() => {
        const { onRefreshData } = this.props;
        onRefreshData();
    };

    _handleSubmit=(e) => {
        e.preventDefault();
        const { authManageActions, form, authModuleId } = this.props;
        form.validateFields((error, fieldsValue) => {
            if (error) {
                message.error(error);
                return;
            }
            authManageActions.acGetAuthItemList({
                name: fieldsValue.authItemName,
                api: fieldsValue.api,
                moduleId: authModuleId
            });
        });
    };

    handleFormReset = () => {
        const { form } = this.props;
        form.resetFields();
    };


    render() {
        const { params, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className={styles.header}>
            <h1>{`${params.name}的` || '的'}权限项列表</h1>
        <div className={styles.controlContainer}>
            <Form onSubmit={this._handleSubmit} layout="inline">
            <Form.Item
        label="权限名称"
            >
            {getFieldDecorator('authItemName')(
        <Input />
    )}
    </Form.Item>
        <Form.Item label="api">
            {getFieldDecorator('api')(
        <Input />
    )}
    </Form.Item>
        <Button type="reset" onClick={this.handleFormReset}>
            重置
            </Button>
            <Button
        type="primary"
        htmlType="submit"
        style={{ marginLeft: '10px' }}
    >
        查询
        </Button>
        </Form>
        <div className={styles.btnGroup}>
            <Button onClick={this.handleRefreshData} type="primary" style={{ margin: '10px' }}>刷新</Button>
        <Button onClick={this.handleCreateAuthModule} type="primary" style={{ margin: '10px' }}>新建权限项</Button>
        </div>
        </div>
        </div>
    );
    }
}

export default AuthItemHeader;
