import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(320deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            corporis accusamus dicta nam aperiam fugit exercitationem, vitae sed
            minima fugiat hic quasi voluptatem quas minus placeat vel, tenetur
            quidem ipsum omnis ducimus, necessitatibus accusantiuturi obcaecati
            Natus velit dicta quas impedit obcaecati cupiditate inventore
            ratione voluptas aliquid tempore, veniam voluptatibus architecto
            veritatis? Fugiat cupiditate exercitationem delectus deserunt
            facilis ipsam ad quisquam deleniti soluta, sint id, ullam suscipit.
            Eum soluta similique rerum. Incidunt officia voluptatibus
            accusantium libero quam, repellendus provident. Iste repellendus
            similique nemo. Provident nam esse consectetur labore optio,
            voluptatum id quod voluptatibus porro molestiae dicta praesentium
            obcaecati impedit itaque expedita eos incidunt, laborum rem
            molestias quis aliquam magni atque voluptas? Iusto cum consectetur
            ex accusantium? Sapiente id ducimus aliquam exercitationem, fugiat
            fugit atque est sunt delect.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showThumbs={false}
    showStatus={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Future is Here
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
