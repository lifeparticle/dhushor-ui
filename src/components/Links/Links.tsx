import React from "react";
import { Layout, Col, Card } from "antd";
import gists from '../../images/gist.png';
import carbon from '../../images/carbon.jpg';
import grammarly from '../../images/grammarly.png';
import hemingWay from '../../images/hemingWay.jpg';
import proWritingAid from '../../images/proWritingAid.png';
const { Meta } = Card;

export const AppLinks: React.FC = () => {
	return (
        <>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="gist" src={gists} />}
            >
                <Meta title="Gist Github" description="https://gist.github.com/" />
            </Card>
            </Col>

            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="proWritingAid" src={proWritingAid} />}
            >
                <Meta title="ProWritingAid" description="https://prowritingaid.com/Free" />
            </Card>
            </Col>

            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="grammarly" src={grammarly} />}
            >
                <Meta title="Grammarly" description="https://app.grammarly.com/" />
            </Card>
            </Col>

            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="hemingWay" src={hemingWay} />}
            >
                <Meta title="Hemingway Editor" description="http://www.hemingwayapp.com/" />
            </Card>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="carbon" src={carbon} />}
            >
                <Meta title="Carbon Now Sh" description="https://carbon.now.sh/" />
            </Card>
            </Col>
        </>
    );
};
