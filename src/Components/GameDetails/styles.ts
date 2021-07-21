import styled from 'styled-components'

export const Container = styled.div`
    width: 1120px;
    margin: 50px auto;
    display: flex;
    
    .loading {
        min-height: 500px;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
    }
    
    .img {
        height: 500px;
        max-width: 600px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 90%;
        }
    }
    
    
    .content {
        padding: 0 4rem;
        
        .infos-template {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
        }
        .description {
            margin-top: 1rem;
            width: 100%;
            font-size: 14px;
            max-height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 1rem;
        }
    }
`;